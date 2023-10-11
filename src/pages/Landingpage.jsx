import { Link } from "react-router-dom";
import './style.css'

function Landingpage() {
    return (
        <>

            <div className='hero'>
                <div className="leftHero">
                    <h1>Find outdoor furniture</h1>
                    <h2>for any day</h2>
                    <Link to='./Catalogue'><button>Browse <span className='primaryColor'>Today</span>&apos;s <span className='accentColor'>&</span> Tomorrow&apos;s Items</button></Link>
                </div>
                <div>
                    <p><span className='primaryColor'>ONGOING</span><span className='accentColor'>&</span>TRENDING</p>
                </div>
            </div>

            <h3>Shop by category</h3>
            <div className="categorySelection">
                <div className="first">
                    <div className="categoryCircle">
                        <img src="src/assets/seating.png" alt="Seating"></img>
                    </div>
                    <p>Seating</p>
                </div>
                <div>
                    <div className="categoryCircle">
                        <img src="src/assets/table-chairs.png" alt="Tables"></img>
                    </div>
                    <p>Tables</p>
                </div>
                <div>
                    <div className="categoryCircle">
                        <img src="src/assets/lamp.png" alt="Lighting"></img>
                    </div>
                    <p>Lighting</p>
                </div>
                <div>
                    <div className="categoryCircle">
                        <img src="src/assets/plant.png" alt="Plants"></img>
                    </div>
                    <p>Plants</p>
                </div>
                <div className="last">
                    <div className="categoryCircle">
                        <img src="src/assets/parasol.png" alt="Shade"></img>
                    </div>
                    <p>Shade</p>
                </div>
            </div>

            <div className="slideshowContainer">
                <p><span className='primaryColor'>OUR</span><span className='accentColor'>&</span>DESIGN</p>
                <img src="src/assets/patioslideshow.jpg"></img>
            </div>

            <div>
                <p>Grid here</p>
            </div>

            <div className="centerButton">
                <Link to='./Catalogue'><button>Browse <span className='primaryColor'>Today</span>&apos;s <span className='accentColor'>&</span> Tomorrow&apos;s Items</button></Link>
            </div>

        </>
    )
}

export default Landingpage