import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import video from "../data/videoplayback.mkv";
import './style.css';

class HomePage extends Component {
    render() {
        return (
            <div className ="big-container">
                <div className = "container">
                    <header>
                        <div className = "logo">
                            <h1> </h1>
                        </div>
                        <nav>
                            <ul>
                                <li> <Link to="/">Home</Link> </li>
                                <li> <Link to="/region">Region Wise</Link> </li>
                                <li> <Link to="/map">Map</Link> </li>
                                <li> <Link to="/airports">Airport</Link> </li>
                                <li>  <Link to="/mapboxgl">Airport-MapBoxGL</Link></li>
                            </ul>

                        </nav>
                    </header>
                    <section>
                        <h2>EFFECT OF COVID-19 ON AIR TRAVEL</h2>
                    </section>
                    <footer>
                        <h2>About us</h2>
                        <p>write some text</p>
                        <h3>
                            Follow us on social media
                        </h3>
                        <div className="row">
                            {/* <a href = "#"><i class = "fa fa-facebook"></i></a> */}
                        </div>
                    </footer>
                </div>
                <video src={video} autoPlay muted loop></video>
            </div>
        )
    }
}

export default HomePage;