import { useState, useContext } from "react"
import { CartContext } from "../context/cartContextProvider";

function ProductPageCard(props) {
    const [products, setProducts] = useState([])
    const { addToCart } = useContext(CartContext);

    return (
        <>
            <div className="productCard">
                <img src="../src/assets/cushionwonder.jpg" alt="Image"></img>
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