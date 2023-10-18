import './style.css'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import ProductCard from '../components/ProductCard.jsx'

function Catalogue() {

    const [data, setData] = useState([])
    const { id } = useParams();

    async function fetchData() {
        await fetch('http://localhost:3000/product/' + id)
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
            <ProductCard
                key={data.id}
                name={data.name}
                categories={data.categories}
                price={data.price}
            />
        </>
    )
}

export default Catalogue
