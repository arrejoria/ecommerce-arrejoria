import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const {categoryId} = useParams();

  useEffect(() => {

    setSpinner(true);

    const collectionRef = categoryId ? (
      query(collection(db, 'products'), where('category', '==', categoryId))
    ) : (collection(db,'products'));

    getDocs(collectionRef).then(response => {
      console.log(response)

      const productsFormatted = response.docs.map(doc => {
        return {id: doc.id, ...doc.data() }; 
      });
      setProducts(productsFormatted);
    }).catch(error => {
      console.log(error)
    }
    ).finally(() => {
      setSpinner(false);
    }
    )
  }, [categoryId]);
 
  if(spinner){
    return <h1 style={{color: "#FFF"}}>Cargando productos...</h1>;
  }

  return (
    <Container className="main-section">
        <div className="products">
            {products.length > 0 ? (
                <ItemList products={products} />
            ) : (
                <h1 style={{color: "#FFF"}}>No hay productos</h1>
            )}
        </div>
    </Container>
  );
}

export default ItemListContainer;
