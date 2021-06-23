import React, { Component } from 'react'
import AdminTeamCard from './AdminTeamCard'
import './admin.css'

let employeeArr = [
    {firstName: "Leah", lastName:"Benitez", jobTitle: "Intern", imageUrl:""},
    {firstName: "Rahel", lastName:"Tokia", jobTitle: "CEO", imageUrl:"https://i1.wp.com/learnabi.com/wp-content/uploads/2019/08/Rahel.jpg?fit=310%2C310&ssl=1"},
    {firstName: "Niara", lastName:"Valerio", jobTitle: "CEO", imageUrl:"https://i2.wp.com/learnabi.com/wp-content/uploads/2019/08/Niara.jpeg?fit=310%2C310&ssl=1"},
    {firstName: "Braulio", lastName:"Calderon", jobTitle: "Intern", imageUrl:""},
]

class AdminTeam extends Component {
    constructor() {
        super();

        this.state = {
            thereAreEmployees:true,
            employeeArr:employeeArr
        }
    }

    render() {
        if (this.state.thereAreEmployees) {

            let arr = this.state.employeeArr.map(e => <AdminTeamCard firstName={e.firstName} lastName={e.lastName} jobTitle={e.jobTitle} imageUrl={e.imageUrl}/>);

            return (
                <div className="page-wrapper">
                    <header className="admin-header" id="admin-team">
                        <h1>Manage Team Page</h1>
                    </header>

                    <h2>Messages</h2>
                    <div className="admin-card-container">
                        {arr}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="page-wrapper">
                    <header className="admin-header" id="admin-team">
                        <h1>Manage Team Page</h1>
                    </header>

                    <div className="admin-nothing-found">
                        <h2>There are no employees at this time.</h2>
                    </div>
                </div>
            )
        }
    }
}

export default AdminTeam;
