import './style.css'
import { useState, useEffect, useContext } from 'react'
import { CartContext } from "../context/cartContextProvider";

function Cart() {
    const cart = useContext(CartContext);

    const [data, setData] = useState([])

    const { removeFromCart } = useContext(CartContext);

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
            <ul>
                {cart && cart.cart.map((item, index) => {
                    return (
                        <li key={index}>
                            <div className='cartProducts d-flex'>
                                <img src="../src/assets/cushionwonder.jpg" alt="Image"></img>
                                <div className='d-flex'>
                                    <div>
                                        <p>{item.name}</p>
                                    </div>
                                    <div className='cartContent'>
                                        <p>{item.price}</p>
                                        <button onClick={() => { removeFromCart(item) }}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>

                    )
                })}
            </ul>
            <button>Continue to checkout</button>
        </>
    )
}

export default Cart
