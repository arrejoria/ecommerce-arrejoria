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
                <h1 className="web_msg-content">Ecommerce en desarrollo</h1>
            </Container>
        </Container>

    );
    }
export default Home;