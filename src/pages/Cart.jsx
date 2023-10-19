import './style.css'
import { useState, useEffect } from 'react'

function Cart() {

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
            <button>Remove all</button>
            <div className='cartProducts d-flex'>
                <img src="../src/assets/cushionwonder.jpg" alt="Image"></img>
                <div className='d-flex'>
                    <div>
                        <p>Name of product</p>
                    </div>
                    <div className='cartContent'>
                        <p>Price of product</p>
                        <button>Remove</button>
                    </div>
                </div>
            </div>
            <button>Continue to checkout</button>
        </>
    )
}

export default Cart
