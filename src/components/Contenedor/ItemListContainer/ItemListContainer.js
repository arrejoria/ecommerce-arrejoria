import "./ItemListContainer.css";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import ItemList from "../../ItemList/ItemList";
import {getProducts} from '../../../services/firebase/firestore';
import { useAssync } from "../../../hooks/useAssync";
const ItemListContainer = ({title}) => {
  const {categoryId} = useParams();
  const {data, loading, error} = useAssync(() => getProducts(categoryId), [categoryId]);

  if(loading){
    return <div className="loading"><h1>Cargando productos</h1></div>;
  }

  if(error){
    return <h1 style={{color: "#FFF"}}>Error al cargar productos</h1>;
  }

  return (
    <Container className="main-section">
        <div className="section-title"> <h1>{title}</h1> </div>
        <div className="products">
            {data.length > 0 ? (
                <ItemList products={data} />
            ) : (
                <h1 style={{color: "#FFF"}}>No hay productos</h1>
            )}
        </div>
    </Container>
  );
}

export default ItemListContainer;
