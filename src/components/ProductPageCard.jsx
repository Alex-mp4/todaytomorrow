import { useState, useContext } from "react"
import { CartContext } from "../context/cartContextProvider";
import { Link } from "react-router-dom";

function ProductPageCard(props) {
    const [products, setProducts] = useState([])
    const { addToCart } = useContext(CartContext);
    let image = Math.floor(Math.random() * 6);

    return (
        <>
            <Link to={'../catalogue'}><button>Back to catalogue</button></Link>
            <div className="productCard">
                <img src="../src/assets/${image}.jpg" alt="Image"></img>
                <div className="product">
                    <h4>{props.name}</h4>
                    <p>Category</p>
                    <p>{props.price}:-</p>
                    <div className="centerButton">
                        <button onClick={() => { addToCart(props) }}>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPageCard