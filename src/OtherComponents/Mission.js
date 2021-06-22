import React, { Component } from 'react'
import Footer from './Footer'
import MissionHeader from '../Images/Mission.jpg'
import PrideFlag from '../Images/Pride.webp'
import GenderEquality from '../Images/gender-equality.png'
import BLM from '../Images/blm.jpg'

class Mission extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <header id="mission-header">
                    <img src={MissionHeader} alt="App Diagram"></img>
                </header>

                <h1 className="section-title">Our Mission</h1>

                <section id="mission-description">
                    <div>
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
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac vestibulum mauris, 
                            volutpat fermentum diam. Quisque in mauris ullamcorper lorem faucibus fermentum. Nulla 
                            facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, felis 
                            a volutpat porta, magna dui semper diam, eget finibus libero quam 
                        </p>
                    </div>
                </section>

                <h1 className="section-title">Our Values</h1>

                <section id="mission-values">
                    <div>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac vestibulum mauris, 
                            volutpat fermentum diam. Quisque in mauris ullamcorper lorem faucibus fermentum. Nulla 
                            facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, felis 
                            a volutpat porta, magna dui semper diam, eget finibus libero quam 
                        </p><br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac vestibulum mauris, 
                            volutpat fermentum diam. Quisque in mauris ullamcorper lorem faucibus fermentum. Nulla 
                            facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, felis 
                            a volutpat porta, magna dui semper diam, eget finibus libero quam 
                        </p>
                    </div>

                    <div id="img-div">
                        <img src={PrideFlag} alt="Pride Flag"></img>
                        <img src={GenderEquality} alt="Gender Equality"></img>
                        <img src={BLM} alt="BLM"></img>
                    </div>
                </section>

                <Footer />
            </div>
        )
    }
}

export default Mission;
