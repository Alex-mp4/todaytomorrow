import { Link } from "react-router-dom";
import './NavAndFooter.css'

function Nav() {


    return (
        <nav>
            <Link to={'./'} className="link"><p><span className='primaryColor'>Today</span> <span className='accentColor'>&</span> <span className='darkColor'>Tomorrow</span></p></Link>
            <div className="rightNav">
                <div className="searchNav">
                    <span className="material-symbols-outlined">search</span>
                    <input type="search" placeholder="Search..." />
                </div>
                <span className="material-symbols-outlined">shopping_cart</span>
            </div>
        </nav>
    )
}

export default Nav