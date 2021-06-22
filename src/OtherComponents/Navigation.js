import React, { Component } from 'react'
import {HashRouter, Link} from 'react-router-dom'

class Navigation extends Component {

    openMenu = () => {
        let navLinks = document.getElementById("nav-links");
        navLinks.classList.toggle('active');
    }

    render() {
        return (
            <div>
                <nav>
                    <h1>learnabi</h1>

                    <div id="nav-links">
                        <ul>
                            <HashRouter>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/mission">Our Mission</Link></li>
                                <li><Link to="/aboutUs">About Us</Link></li>
                                <li><Link to="/ourTeam">Our Team</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </HashRouter>
                        </ul>
                    </div>

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

                    <div id="span" onClick={this.openMenu}>
                        <div id="span-bar"></div>
                        <div id="span-bar"></div>
                        <div id="span-bar"></div>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navigation;