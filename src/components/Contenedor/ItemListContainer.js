import './ItemListContainer.css'
import QBRimage from '../img/QBR-main_bg.jpg'
import {Container} from '@mui/material'

const ItemListContainer = () => {

    return (
        <Container className='main-section'>
            <h1 className="main-title">PROYECTO EN DESARROLLO</h1>
            <div className='main-image'>
                <img src={QBRimage} alt="Que buena remera wall image"/>
            </div>
        </Container>
    )
}

export default ItemListContainer;