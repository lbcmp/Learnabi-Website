import React, { Component } from 'react'
import OurTeamCard from './OurTeamCard'
import Footer from './Footer'

let employeeArr = [
    {firstName: "Rahel", lastName:"Tokia", jobTitle: "CEO", imageUrl:"https://i1.wp.com/learnabi.com/wp-content/uploads/2019/08/Rahel.jpg?fit=310%2C310&ssl=1"},
    {firstName: "Niara", lastName:"Valerio", jobTitle: "CEO", imageUrl:"https://i2.wp.com/learnabi.com/wp-content/uploads/2019/08/Niara.jpeg?fit=310%2C310&ssl=1"},
    {firstName:"Christina M.", lastName:"Amendola", jobTitle:"Personalized Learning Instructor - ELA", imageUrl:"https://i1.wp.com/learnabi.com/wp-content/uploads/2019/08/ChristinaHeadshot.jpeg?fit=310%2C310&ssl=1"},
    {firstName:"Nick", lastName:"Anderson", jobTitle:"Mathematics Content Developer", imageUrl:"https://i1.wp.com/learnabi.com/wp-content/uploads/2019/08/Nick.png?fit=310%2C310&ssl=1"},
    {firstName:"Emmanuel", lastName:"Blankson", jobTitle:"Personalized Learning Instructor- Mathematics", imageUrl:"https://i0.wp.com/learnabi.com/wp-content/uploads/2019/08/Emmanuel.png?fit=310%2C310&ssl=1"},
    {firstName:"Chun-Fai \"Colin\"", lastName:"Chan", jobTitle:"Personalized Learning Instructor - Science", imageUrl:"https://i0.wp.com/learnabi.com/wp-content/uploads/2019/08/Colin.jpeg?fit=310%2C310&ssl=1"},
    {firstName:"Taury", lastName:"Phelps", jobTitle:"Spring 2019 Marketing Intern", imageUrl:"https://i1.wp.com/learnabi.com/wp-content/uploads/2019/08/Taury.jpeg?fit=310%2C310&ssl=1"},
    {firstName:"Melissa", lastName:"Mitchem", jobTitle:"Social Studies Content Developer", imageUrl:"https://i0.wp.com/learnabi.com/wp-content/uploads/2019/08/Melissa.png?fit=276%2C276&ssl=1"},
    {firstName: "Braulio", lastName:"Calderon", jobTitle: "Intern", imageUrl:""},
    {firstName: "Leah", lastName:"Benitez", jobTitle: "Intern", imageUrl:""}
]

class OurTeam extends Component {

    constructor() {
        super();

        this.state = {
            thereAreEmployees:true,
            employeeArr:employeeArr
        }
    }
    
    render() {
        if (this.state.thereAreEmployees) {

            let arr = this.state.employeeArr.map(e => <OurTeamCard firstName={e.firstName} lastName={e.lastName} jobTitle={e.jobTitle} imageUrl={e.imageUrl}/>);

            return (
                <div className="page-wrapper">
                    <header id="ourTeam-header">
                        <h1>Meet Our Team</h1>
                        <br></br>
                        <h3>The people who make it all possible</h3>
                    </header>

                    <section id="ourTeam-employeeContainer">
                        {arr}
                    </section>

                    <Footer />
                </div>
            )
        } else {
            return (
                <div id="ourTeam-noEmployees">
                    <div><h3>There are no employees to be seen at this time.</h3></div>
                    <Footer />
                </div>
            )
        }
    }
}

export default OurTeam;