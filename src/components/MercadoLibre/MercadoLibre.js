import {useState, useEffect } from "react"

const MercadoLibre = () => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState('')

console.log(products)

const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`).then(response => {
           return response.json()
        }).then(res => {
            setProducts(res.results)
        })
        .catch( error => {
            console.log(error)
        })
}

    return(
        <>
            <h1>MercadoLibre</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name="" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
            <ul>
                {products.map(prod => {
                    return(
                        <li key={prod.key}>
                            <img src={prod.thumbnail} alt={prod.title}></img>
                            <p style={{color:'#FFF'}}>{prod.title}</p>
                            <p style={{color:'#FFF'}}>${prod.price}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default MercadoLibre