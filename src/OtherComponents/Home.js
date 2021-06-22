import React, { Component } from 'react'
import HeaderImage from '../Images/background.jpg'
import HammerImage from '../Images/hammer-icon.png'
import AppImage from '../Images/app-preview.png'
import {HashRouter, Link} from 'react-router-dom'
import './style.css'

class Home extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <header id="home-header">
                    <div id="home-header-div">
                        <img src={HeaderImage} alt="Background"></img>
                    </div>
                    
                    <div id="home-title">
                        <div>
                            <h1>learnabi</h1>
                            <h2>Learn the way you like</h2>
                        </div>
                    </div>
                </header>

                <h1 className="section-title">An app that lets students learn at their own pace</h1>
                <section id="home-brief-goal">

                    <div id="home-goal-description">
                        <div>
                            <h2>In progress</h2>
                            <img src={HammerImage} alt="Hammer"></img>
                        </div>

                        <br></br>

                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac vestibulum mauris, 
                            volutpat fermentum diam. Quisque in mauris ullamcorper lorem faucibus fermentum. Nulla 
                            facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, felis 
                            a volutpat porta, magna dui semper diam, eget finibus libero quam 
                        </p>

                        <br></br>

                        <HashRouter><Link to="/mission">&gt; Learn more about our mission &lt;</Link></HashRouter>
                    </div>

                    <div id="home-goal-img-div">
                        <img src={AppImage} alt="App Preview"></img>
                    </div>

                </section>

                <h1 className="section-title">Follow along our journey</h1>
                <section id="home-follow-along"> 
                    <ul>
                        <li>Follow us on Instagram and Twitter for the latest updates</li>
                        <li>Subscribe to our weekly blog, where we dig deeper into learnabi and important causes</li>
                    </ul>

                    <div id="home-social-icons">
                        <a href="https://www.instagram.com/learnabi/" target="_blank" rel="noreferrer">
                            <i className="fa fa-instagram"></i>
                        </a>

                        <a href="https://twitter.com/Learnabi" target="_blank" rel="noreferrer">
                            <i className="fa fa-twitter"></i>
                        </a>

                        <a href="https://learnabi.medium.com/" target="_blank" rel="noreferrer">
                            <i className="fa fa-medium"></i>
                        </a>
                    </div>
                </section>

                <footer>
                    <h1>learnabi</h1>

                    <div className="social-icons">

                        <a href="https://www.instagram.com/learnabi/" target="_blank" rel="noreferrer">
                            <i className="fa fa-instagram"></i>
                        </a>

                        <a href="https://twitter.com/Learnabi" target="_blank" rel="noreferrer">
                            <i className="fa fa-twitter"></i>
                        </a>

                        <a href="https://learnabi.medium.com/" target="_blank" rel="noreferrer">
                            <i className="fa fa-medium"></i>
                        </a>
                    </div>

                    <ul>
                        <li><h5>Email: info@learnabi.com</h5></li>
                        <li><h5>Address: 90 Broad St, New York, NY 10004, USA</h5></li>
                    </ul>
                </footer>
            </div>
        )
    }
}

export default Home;