import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [spinner, setSpinner] = useState(true)
    console.log(products)
  const {categoryId} = useParams()


  useEffect(() => {
    setSpinner(true)

    if(!categoryId){
      getProducts().then((prods) => {
        setProducts(prods);

      }).catch( error => {
        console.log(error)

      }).finally( () => {
          setSpinner(false)
      });
    }else{
      getProductsByCategory(categoryId).then(prods => {
        setProducts(prods)

      }).catch( error => {
        console.log(error)

      }).finally(() => {
        setSpinner(false)
        
      });
    }

  }, [categoryId]);

  if(spinner){
    return <h1 style={{color: "#FFF"}}>Cargando productos...</h1>
  }

  return (
    <Container className="main-section">
        <div className="products">
            <ItemList products={ products }/>
        </div>
    </Container>
  );
};

export default ItemListContainer;
