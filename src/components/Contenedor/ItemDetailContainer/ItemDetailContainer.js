import './ItemDetailContainer.css'
import { useState,useEffect } from 'react'
import { getProductById } from '../../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState()
    const {productId} = useParams()
    const [spinner, setSpinner] = useState(true)

    useEffect(() => {
        getProductById(productId).then( resp => {
            setProduct(resp)
        }).catch( (error) => {
            console.log(error)
        }).finally(() => {
            setSpinner(false)
            
          });
    }, [])

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