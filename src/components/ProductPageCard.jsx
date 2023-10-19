function ProductPageCard(props) {

    return (
        <>
            <div className="productCard">
                <img src="../src/assets/cushionwonder.jpg" alt="Image"></img>
                <div className="product">
                    <h4>{props.name}</h4>
                    <p>Category</p>
                    <p>{props.price}:-</p>
                    <div className="centerButton">
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPageCard