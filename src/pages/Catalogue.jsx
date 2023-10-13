import './style.css'
import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard.jsx'

function Catalogue() {

    const [data, setData] = useState([])

    async function fetchData() {
        await fetch('http://localhost:3000/product')
            .then(res => res.json())
            .then(result => {
                setData(result.data)
                console.log(result.data)
            }).catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchData()
        console.log(data)
    }, [])

    return (
        <>
            <div className="productGridRow1">
                {data.map((product) => (
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </div>
        </>
    )
}

export default Catalogue
