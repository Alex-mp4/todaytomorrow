import { Link } from "react-router-dom";

function ProductCard(props) {

    return (
        <>
            <Link to={'/product/' + props.id} className="productCard">
                <img src={`/images/${props.image}`} alt="Image" />
                <div className="product">
                    <h4>{props.name}</h4>1
                    <p>Category</p>
                    <p>{props.price}:-</p>
                </div>
            </Link >
        </>
    )
}

export default ProductCard