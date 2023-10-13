import './style.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'

function Catalogue() {

    const [data, setData] = useState([])

    async function fetchData() {
        await fetch('http://localhost:3000')
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
                <Link to={'/'} className="productCard">
                    <img src="src/assets/cushionwonder.jpg" alt="Cushion Wonder"></img>
                    <div className="product1">
                        <h4>Cushion Wonder</h4>
                        <p>Dual Seating</p>
                        <p>2000:-</p>
                    </div>
                </Link>
                <Link to={'/'} className="productCard">
                    <img src="src/assets/cushionwonder.jpg" alt="Cushion Wonder"></img>
                    <div className="product1">
                        <h4>Cushion Wonder</h4>
                        <p>Dual Seating</p>
                        <p>2000:-</p>
                    </div>
                </Link>
                <Link to={'/'} className="productCard">
                    <img src="src/assets/cushionwonder.jpg" alt="Cushion Wonder"></img>
                    <div className="product1">
                        <h4>Cushion Wonder</h4>
                        <p>Dual Seating</p>
                        <p>2000:-</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Catalogue
