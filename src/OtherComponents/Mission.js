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
                        <p> School curriculums, which are meant to educate and foster valuable skills in students, 
                            oftentimes fail them instead. They are outdated, rigid, and unrelatable; designed in 
                            such a way that some students are left feeling disinterested in what they are learning, 
                            or discouraged due to academic pressure. As a result, many fall behind, especially those 
                            who are chronically absent or struggling with the fast-pased nature of everything. 
                        </p><br></br>
                        <p> The question we need to ask is: what does the student need? We at Learnabi aim to provide a 
                            source of education that keeps students engaged, informed and motivated. We put them at the 
                            very center of our product, and give them the opportunity to choose how they will learn and 
                            the type of content they consume, all at their own pace.
                        </p><br></br>
                        <p> We are currently working on the Learnabi app, where students can make 2 minute long videos 
                            ranging from Mathematics and Science, all the way to How to Cook. Students will also be able 
                            to create a profile and be a part of our community, where they can browse content made by other 
                            students. If the students wants additional help, they can comment on videos, private message 
                            others, or start group chats. 
                        </p><br></br>
                        <p> All in all, we aim to create a collaborative environment that embraces the individuality of each 
                            student and gives them the tools to advance their own education as they see fit. 
                        </p>
                    </div>
                </section>

                <h1 className="section-title">Our Values</h1>

                <section id="mission-values">
                    <div>
                        <p>We at Learnabi embrace diversity and inclusivity.</p>
                        <br></br>
                        <p> We strive to make learning accessible and equitable for everyone willing to learn. 
                            And so we are working diligently to make our platform a safe, positive space where students can 
                            help and build each other up. We ask that our users be respectful of their peers, no matter their 
                            background, race or identity. Any bullying of any kind will not be tolerated or permitted.
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
