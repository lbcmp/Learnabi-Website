import React, { Component } from "react";
import OurTeamCard from "./OurTeamCard";
import Footer from "./Footer";
import { firestore } from "../components/firebase/firebase";

// let employeeArr = [
//     {firstName: "Rahel", lastName:"Tekola", jobTitle: "CEO", imageUrl:"https://i1.wp.com/learnabi.com/wp-content/uploads/2019/08/Rahel.jpg?fit=310%2C310&ssl=1"},
//     {firstName: "Niara", lastName:"Valério", jobTitle: "CEO", imageUrl:"https://i2.wp.com/learnabi.com/wp-content/uploads/2019/08/Niara.jpeg?fit=310%2C310&ssl=1"},
//     {firstName:"Christina M.", lastName:"Amendola", jobTitle:"Personalized Learning Instructor - ELA", imageUrl:"https://i1.wp.com/learnabi.com/wp-content/uploads/2019/08/ChristinaHeadshot.jpeg?fit=310%2C310&ssl=1"},
//     {firstName:"Nick", lastName:"Anderson", jobTitle:"Mathematics Content Developer", imageUrl:"https://i1.wp.com/learnabi.com/wp-content/uploads/2019/08/Nick.png?fit=310%2C310&ssl=1"},
//     {firstName:"Emmanuel", lastName:"Blankson", jobTitle:"Personalized Learning Instructor- Mathematics", imageUrl:"https://i0.wp.com/learnabi.com/wp-content/uploads/2019/08/Emmanuel.png?fit=310%2C310&ssl=1"},
//     {firstName:"Chun-Fai \"Colin\"", lastName:"Chan", jobTitle:"Personalized Learning Instructor - Science", imageUrl:"https://i0.wp.com/learnabi.com/wp-content/uploads/2019/08/Colin.jpeg?fit=310%2C310&ssl=1"},
//     {firstName:"Melissa", lastName:"Mitchem", jobTitle:"Social Studies Content Developer", imageUrl:"https://i0.wp.com/learnabi.com/wp-content/uploads/2019/08/Melissa.png?fit=276%2C276&ssl=1"},
//     {firstName:"Taury", lastName:"Phelps", jobTitle:"Spring 2019 Marketing Intern", imageUrl:"https://i1.wp.com/learnabi.com/wp-content/uploads/2019/08/Taury.jpeg?fit=310%2C310&ssl=1"},
//     {firstName:"Andrés", lastName:"Rodriguez-Aponte", jobTitle:"Personalized Learning Instructor - Mathematics", imageUrl:"https://i2.wp.com/learnabi.com/wp-content/uploads/2019/08/Andres.png?fit=310%2C310&ssl=1"},
//     {firstName:"Lucia", lastName:"Brizio", jobTitle:"Summer 2018 Business and Operations Intern", imageUrl:"https://i2.wp.com/learnabi.com/wp-content/uploads/2019/08/Lucia.jpg?fit=310%2C310&ssl=1"},
//     {firstName:"Mariama", lastName:"Diallo", jobTitle:"Summer 2018 Education Content Intern", imageUrl:"https://i1.wp.com/learnabi.com/wp-content/uploads/2019/08/Mariama.jpg?fit=310%2C310&ssl=1"},
//     {firstName:"Sri", lastName:"Kozhissery", jobTitle:"Spring 2019 Data & Product Support Intern", imageUrl:"https://i2.wp.com/learnabi.com/wp-content/uploads/2019/08/SriKozhissery_281_29.jpg?fit=310%2C310&ssl=1"},
//     {firstName:"Meheret", lastName:"Woldeyoannes", jobTitle:"", imageUrl:"https://i1.wp.com/learnabi.com/wp-content/uploads/2019/08/Mimi.jpg?fit=310%2C310&ssl=1"},
//     {firstName:"JC", lastName:"Stiassni", jobTitle:"Advisory Board Member", imageUrl:"https://i0.wp.com/learnabi.com/wp-content/uploads/2019/08/JC.jpg?fit=310%2C310&ssl=1"},
//     {firstName:"Celi", lastName:"Khanyile-Lynch", jobTitle:"Advisory Board Member", imageUrl:"https://i1.wp.com/learnabi.com/wp-content/uploads/2019/08/Celi.png?fit=310%2C310&ssl=1"},
//     {firstName:"Jocelyn", lastName:"Chu", jobTitle:"Advisory Board Member", imageUrl:"https://i2.wp.com/learnabi.com/wp-content/uploads/2019/08/Jocelyn.png?fit=310%2C310&ssl=1"},
//     {firstName: "Braulio", lastName:"Calderon", jobTitle: "Intern", imageUrl:""},
//     {firstName: "Leah", lastName:"Benitez", jobTitle: "Intern", imageUrl:""}
// ]

class OurTeam extends Component {
  constructor() {
    super();

    this.state = {
      thereAreEmployees: true,
      // employeeArr:employeeArr,
      data: [],
    };
  }
  componentDidMount() {
    firestore
      .collection("learnabiEmployees")
      .get()
      .then((querySnapShot) => {
        const data = querySnapShot.docs.map((item) => item.data());
        this.setState({ data: data });
      });
  }

  render() {
    if (this.state.thereAreEmployees) {
      let arr = this.state.data.map((e) => (
        <OurTeamCard
          key={e.EmployeeId}
          firstName={e.Name}
          
          jobTitle={e.Tittle}
          imageUrl={e.Image}
        />
      ));

      return (
        <div className="page-wrapper">
          <header id="ourTeam-header">
            <h1>Meet Our Team</h1>
            <br></br>
            <h3>The people who make it all possible</h3>
          </header>

          <section id="ourTeam-employeeContainer">{arr}</section>

          <Footer />
        </div>
      );
    } else {
      return (
        <div id="ourTeam-noEmployees">
          <div>
            <h3>There are no employees to be seen at this time.</h3>
          </div>
          <Footer />
        </div>
      );
    }
  }
}

export default OurTeam;
