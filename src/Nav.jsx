import './NavAndFooter.css'

function Nav() {


    return (
        <nav>
            <p><span className='primaryColor'>Today</span> <span className='accentColor'>&</span> <span className='darkColor'>Tomorrow</span></p>
            <i className='material-icons'>search</i>
            <i className='material-icons'>shopping_cart</i>
        </nav>
    )
}

export default Nav