import './style.css'
import { Link } from "react-router-dom";

function Catalogue() {


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
