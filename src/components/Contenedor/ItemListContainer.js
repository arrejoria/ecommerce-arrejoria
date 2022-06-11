import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { getProducts } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <Container className="main-section">
      <h1 className="main-title"> PROYECTO EN DESARROLLO </h1>
        <div className="products">
            <ItemList products={ products }/>
        </div>
    </Container>
  );
};

export default ItemListContainer;
