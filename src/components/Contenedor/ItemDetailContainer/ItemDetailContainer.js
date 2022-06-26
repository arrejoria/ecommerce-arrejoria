import './ItemDetailContainer.css'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../ItemDetail/ItemDetail'

import {getDoc, doc} from 'firebase/firestore'
import {db} from '../../../services/firebase'


const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState()

    const {productId} = useParams()
    const [spinner, setSpinner] = useState(true)

    useEffect(() => {

        const docRef = doc(db, 'products', productId);
        
        getDoc(docRef).then(doc => {
            console.log(doc)
            const productFormatted = { id: doc.id, ...doc.data() };
            setProduct(productFormatted) 
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setSpinner(false)
        })
    
    }, [productId] )
        
    if(spinner){
        return <h1 style={{color: "#FFF"}}>Cargando detalles...</h1>
      }

    return (
        <>
            <h1 style={{color: "#FFF"}}>Detalle del producto</h1>
            <ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer