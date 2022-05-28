import './ItemListContainer.css'
import QBRimage from '../img/QBR-main_bg.jpg'

const ItemListContainer = () => {

    return (
        <main className='main-section'>
            <h1 className="main-title">PROYECTO EN DESARROLLO</h1>
            <div className='main-image'>
                <img src={QBRimage} alt="Que buena remera wall image"/>
            </div>
        </main>
    )
}

export default ItemListContainer;