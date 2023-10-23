import { Link } from "react-router-dom";
import './style.css'
import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard.jsx'

function Landingpage() {

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
            <div className='hero'>
                <div className="leftHero">
                    <h1>Find outdoor furniture</h1>
                    <h2>for any day</h2>
                    <Link to='./catalogue'><button>Browse <span className='primaryColor'>Today</span>&apos;s <span className='accentColor'>&</span> Tomorrow&apos;s Items</button></Link>
                </div>
                <div>
                    <p><span className='primaryColor'>ONGOING</span><span className='accentColor'>&</span>TRENDING</p>
                </div>
            </div>

            <h3>Shop by category</h3>
            <div className="categorySelection">
                <Link to={'/'} className="first link">
                    <div className="categoryCircle">
                        <img src="images/seating.png" alt="Seating"></img>
                    </div>
                    <p>Seating</p>
                </Link>
                <Link to={'/'} className="link">
                    <div className="categoryCircle">
                        <img src="images/table-chairs.png" alt="Tables"></img>
                    </div>
                    <p>Tables</p>
                </Link>
                <Link to={'/'} className="link">
                    <div className="categoryCircle">
                        <img src="images/lamp.png" alt="Lighting"></img>
                    </div>
                    <p>Lighting</p>
                </Link>
                <Link to={'/'} className="link">
                    <div className="categoryCircle">
                        <img src="images/plant.png" alt="Plants"></img>
                    </div>
                    <p>Plants</p>
                </Link>
                <Link to={'/'} className="link last">
                    <div className="categoryCircle">
                        <img src="images/parasol.png" alt="Shade"></img>
                    </div>
                    <p>Shade</p>
                </Link>
            </div>

            <div className="slideshowContainer">
                <p><span className='primaryColor'>OUR</span><span className='accentColor'>&</span>DESIGN</p>
                <img src="images/patioslideshow.jpg"></img>
            </div>

            <h4 className="BSText"><span className='primaryColor'>BEST</span><span className='accentColor'>&</span>SELLERS</h4>

            <div className="productGridRow d-flex">
                {data.slice(0, 3).map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        image={product.image}
                        categories={product.categories}
                        price={product.price}
                    />
                ))}
            </div>
            <div className="productGridRow row2">
                {data.slice(4, 5).map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        image={product.image}
                        categories={product.categories}
                        price={product.price}
                    />
                ))}
            </div>
            <div className="productGridRow row3 d-flex">
                {data.slice(6, 8).map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        image={product.image}
                        categories={product.categories}
                        price={product.price}
                    />
                ))}
            </div>

            <div className="centerButton">
                <Link to='./catalogue'><button>Browse <span className='primaryColor'>Today</span>&apos;s <span className='accentColor'>&</span> Tomorrow&apos;s Items</button></Link>
            </div>

        </>
    )
}

export default Landingpage