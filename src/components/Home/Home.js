import './Home.css';
import { Container } from "@mui/material";


const Home = () => {
    return (
        <Container className="container">
            <Container component="header" className='container'>
                <h1 className="title">Home</h1>
                <h3 className="subtitle">Bienvenido a la pagina principal</h3>
            </Container>
            <Container component="section" className='container web_msg-container'>
                <p className="web_msg">Ecommerce en proceso de desarrollo. Estamos trabajando en esta seccion</p>
                <p className="web_msg">Por favor, ir a "Remeras" para ver nuestros productos</p>
            </Container>
        </Container>

    );
    }
export default Home;