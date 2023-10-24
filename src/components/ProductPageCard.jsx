import { useState, useContext } from "react"
import { CartContext } from "../context/cartContextProvider";
import { Link } from "react-router-dom";

function ProductPageCard(props) {
    const [products, setProducts] = useState([])
    const { addToCart } = useContext(CartContext);

    return (
        <>
            <Link to={'../catalogue'}><button>Back to catalogue</button></Link>
            <div className="productCard">
                <img src={`/images/${props.image}`} alt="Product Image" />
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