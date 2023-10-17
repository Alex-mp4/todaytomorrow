import { Link } from "react-router-dom";

function ProductCard(props) {
    //let {name, price} = props;

    return (
        <>
            <Link to={'/'} className="productCard">
                <img src="src/assets/cushionwonder.jpg" alt="Cushion Wonder"></img>
                <div className="product">
                    <h4>{props.name}</h4>
                    <p>Category</p>
                    <p>{props.price}:-</p>
                </div>
            </Link>
        </>
    )
}

export default ProductCard