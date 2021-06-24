import React, { Component } from 'react'
import {HashRouter, Link} from 'react-router-dom'

import HeaderImage from '../Images/background.jpg'
import HammerImage from '../Images/hammer-icon.png'
import AppImage from '../Images/app-preview.png'
import Cofounders from '../Images/cofounders-home-page.jpeg'
import Footer from './Footer'
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

                <h1 className="section-title">An app that lets the students decide</h1>
                <section id="home-brief-goal">

                    <div id="home-goal-description">
                        <div>
                            <h2><b>In progress</b></h2>
                            <img src={HammerImage} alt="Hammer"></img>
                        </div>

                        <br></br>

                        <p> We at Learnabi understand that there is no one-size-fits-all approach to learning, and sometimes 
                            students need support outside the classroom, too. So we are creating an app that aims to provide 
                            learners of all ages with a space to explore subjects, chat with friends, and choose what to tackle 
                            next. Join the waitlist to be one of the first to try our app!
                        </p>

                        <br></br>

                        <p>&gt; <a href="https://airtable.com/shr8p8CneM1Un9WAs" target="_blank" rel="noreferrer">Join the Waitlist</a> &lt;</p>
                    </div>

                    <div id="home-goal-img-div">
                        <img src={AppImage} alt="App Preview"></img>
                    </div>

                </section>

                <h1 className="section-title">Follow along on our journey</h1>
                <section id="home-follow-along"> 
                    <ul>
                        <li>Follow us on Instagram and Twitter for the latest updates</li>
                        <br></br>
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

                <Footer />
            </div>
        )
    }
}

export default Home;