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
            <div className="productGridRow">
                {data.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        categories={product.categories}
                        price={product.price}
                    />
                ))}
            </div>
        </>
    )
}

export default Catalogue
