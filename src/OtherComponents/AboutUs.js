import React, { Component } from 'react'
import Footer from './Footer'

import PinkTriangle from '../Images/pink-triangle.png'

class AboutUs extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <header id="aboutUs-header">
                    <div id="left"></div>
                    <div id="right">
                        <h1>About Us</h1>
                    </div>
                </header>

                <h1 className="section-title">Our Origin Story</h1>

                <section id="aboutUs-origin">
                    <div id="text">
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac vestibulum mauris, 
                            volutpat fermentum diam. Quisque in mauris ullamcorper lorem faucibus fermentum. Nulla 
                            facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, felis 
                            a volutpat porta, magna dui semper diam, eget finibus libero quam 
                        </p><br></br>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac vestibulum mauris, 
                            volutpat fermentum diam. Quisque in mauris ullamcorper lorem faucibus fermentum. Nulla 
                            facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, felis 
                            a volutpat porta, magna dui semper diam, eget finibus libero quam 
                        </p><br></br>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac vestibulum mauris, 
                            volutpat fermentum diam. Quisque in mauris ullamcorper lorem faucibus fermentum. Nulla 
                            facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, felis 
                            a volutpat porta, magna dui semper diam, eget finibus libero quam 
                        </p><br></br>
                    </div>

                    <div id="triangle">
                        <img src={PinkTriangle} alt="Triangle"></img>
                    </div>
                </section>

                <Footer />
            </div>
        )
    }
}

export default AboutUs;