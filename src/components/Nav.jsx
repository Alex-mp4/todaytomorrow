import { Link } from "react-router-dom";
import './NavAndFooter.css'

function Nav() {


    return (
        <nav>
            <Link to={'./'} className="link"><p><span className='primaryColor'>Today</span> <span className='accentColor'>&</span> <span className='darkColor'>Tomorrow</span></p></Link>
            <i className='material-icons'>search</i>
            <input type="search" />
            <i className='material-icons'>shopping_cart</i>
        </nav>
    )
}

export default Nav