import { useContext, useState } from "react"
import CartContext from "../../Context/CartContext"
import { useNotification } from "../../Notifications/Notification"
import { addDoc, collection, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import './CheckoutForm.css'

const CheckoutForm = () => {

    const [ values, setValues] = useState({ name: '', phone: '', email: '', address: '' })
    const { cart, clearCart, getTotal } = useContext(CartContext)
    const showNotification = useNotification()
 
    const [spinner, setSpinner] = useState(false)


    const createOrder = (evt) => {
        evt.preventDefault();

        setSpinner(true)

        const order = {
            buyer: {...values},
            products: cart, 
            date: new Date(),
            total: getTotal()
            }
            
            const batch = writeBatch(db)
            const ids = cart.map(item => item.id)
            const collections = collection(db, 'products')
            const outOfStock = []
        
                getDocs(query(collections, where(documentId(), 'in', ids)))
                .then(response => {
                    response.docs.forEach(doc => {
                        const docData = doc.data()
                        const product = cart.find(item => item.id === doc.id)
                        const quantity = product.quantity
    
                        if(docData.stock >= quantity){
                            batch.update(doc.ref, {
                                stock: docData.stock - quantity
                            })
                        }else{
                            outOfStock.push({id: doc.id, ...docData})
                        }
                    })
                }).then( () => {
                    if(outOfStock.length === 0){
                        const collections = collection(db, 'orders')
                        return addDoc(collections, order)
                    }else{
                        return Promise.reject({ type: 'out_of_stock', products: outOfStock })
                    }
                }).then(({id}) => {
                    batch.commit()
                    showNotification('Orden creada', 'success')
                    clearCart()
                }).catch(err => {
                    if(err.type === 'out_of_stock'){
                        showNotification(`La cantidad del producto se actualizó, ${outOfStock[0].name} ahora tiene ${outOfStock[0].stock} remeras en stock`, 'error')
                    }else{
                        console.log(err)
                    }
                }).finally(() => {
                    setSpinner(false)
                    
                })


    }   

    const inputChange = (evt) => {
        const { name, value } = evt.target
        const newValues = {...values, [name]: value}

        setValues(newValues)
    }


    return (
        <form className="checkout-form" onSubmit={createOrder}>
            <div className="checkout-form-body">
                <div className="checkout-form-body-content">
                    <div className="checkout-form-body-title">
                        <h2>Datos de envío</h2>
                    </div>
                    <div className="checkout-form-body-items">
                        <div className="checkout-form-body-item">
                            <label>Nombre</label>
                            <input id="name" type="text" name="name" value={values.name} onChange={inputChange} />
                        </div>
                        <div className="checkout-form-body-item">
                            <label>Teléfono</label>
                            <input id="phone" type="phone" name="phone" value={values.phone} onChange={inputChange} />
                        </div>
                        <div className="checkout-form-body-item">
                            <label>Correo electronico</label>
                            <input id="email" type="email" name="email" value={values.email} onChange={inputChange} />
                        </div>
                        <div className="checkout-form-body-item">
                            <label>Dirección</label>
                            <input id="address" type="text" name="address" value={values.address} onChange={inputChange}/>
                        </div>
                    </div>
                    <div className="submit-btn">
                        <input type="submit" value="Enviar" />
                    </div>
                </div>
            </div>
        </form>
        ) 
}

export default CheckoutForm;
            