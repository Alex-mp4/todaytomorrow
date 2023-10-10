import { Link } from "react-router-dom";
import './style.css'

function Landingpage() {
    return (
        <>

            <div className='hero'>
                <div>
                    <h1>Find outdoor furniture</h1>
                    <h2>for any day</h2>
                    <Link to='./Catalogue'><button>Browse <span className='primaryColor'>Today</span>&apos;s <span className='accentColor'>&</span> <span className='darkColor'>Tomorrow</span>&apos;s Items</button></Link>
                </div>
                <div>
                    <p><span className='primaryColor'>ONGOING</span><span className='accentColor'>&</span><span className='darkColor'>TRENDING</span></p>
                </div>
            </div>

            <div>
                <h3>Shop by category</h3>
                <div>Seating</div>
                <div>Tables</div>
                <div>Lighting</div>
                <div>Plants</div>
                <div>Shade</div>
            </div>

            <div>
                <p><span className='primaryColor'>OUR</span><span className='accentColor'>&</span><span className='darkColor'>DESIGN</span></p>
                <img></img>
            </div>

            <div>
                <p>Grid here</p>
            </div>

            <Link to='./Catalogue'><button>Browse <span className='primaryColor'>Today</span>&apos;s <span className='accentColor'>&</span> <span className='darkColor'>Tomorrow</span>&apos;s Items</button></Link>

        </>
    )
}

export default Landingpage