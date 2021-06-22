import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
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
        )
    }
}

export default Footer;
