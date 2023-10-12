import './NavAndFooter.css'

function Footer() {


    return (
        <footer>
            <p className='logo'><span className='primaryColor'>Today</span> <span className='accentColor'>&</span> <span className='darkColor'>Tomorrow</span></p>
            <div className='footerContainer'>
                <div>
                    <h5>Contact us</h5>
                    <p>Contact form</p>
                    <p>Our warehouses</p>
                    <p></p>
                </div>
                <div>
                    <h5>Customer service</h5>
                    <p>Shipping</p>
                    <p>Returns</p>
                    <p>Customer data</p>
                </div>
                <div>
                    <h5>About us</h5>
                    <p>Our history</p>
                    <p>Work for us</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer