import './ItemDetailContainer.css'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../ItemDetail/ItemDetail'

import {getDoc, doc} from 'firebase/firestore'
import {db} from '../../../services/firebase'


const ItemDetailContainer = ({title}) => {
    
    const [product, setProduct] = useState()

    const {productId} = useParams()
    const [spinner, setSpinner] = useState(true)

    useEffect(() => {

        const docRef = doc(db, 'products', productId);
        
        getDoc(docRef).then(doc => {
            const productFormatted = { id: doc.id, ...doc.data() };
            setProduct(productFormatted) 
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setSpinner(false)
        })
    
    }, [productId] )
        
    if(spinner){
        return <div className="loading"><h1>Cargando detalles</h1></div>
      }

    return (
        <>
            <h1 style={{color: "#FFF"}}>{title}</h1>
            <ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer