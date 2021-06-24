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
                        <p> Learnabi’s cofounders, Rahel Tekola and Niara Valério, met as Graduate students at Columbia 
                            University. There, they bonded over a shared passion for education and quickly because close 
                            friends. Later, while working as tutors in the South Bronx, Rahel and Niara noticed a disconnect 
                            between students and educators, and saw a demand for a more individualized way of learning. And 
                            so they founded Learnabi in 2017 to address this need.
                        </p><br></br>
                        <p> Since then, we at Learnabi have been fortunate enough to attract a team of dedicated individuals, 
                            who come to us with technical expertise and experience in personalized learning and learning analytics. 
                            Many of our employees come from Teachers College at Columbia University and NYU Steinhardt, two schools 
                            that we have had the pleasure to establish partnerships with. 
                        </p><br></br>
                        <p> Thanks to the hard work of everyone on the team, much has been accomplished since Learnabi came to be. 
                            So far, we have served over 1,500 students in the New York City area, where we fostered an 86% graduation 
                            rate (the average is around 66%). Our plan is to expand our network and someday soon provide alternative, 
                            accessible education to students everywhere.
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