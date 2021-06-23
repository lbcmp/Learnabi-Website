import React, { Component } from 'react'
import './admin.css'
import AdminContactCard from './AdminContactCard';

// let messageArr = [
//     {firstName: "Leah", lastName:"Benitez", email:"email@email.com", subject:"Hello", message:"Hello"},
//     {firstName: "Braulio", lastName:"Calderon", email:"email2@email.com", subject:"Bye", message:"Bye"},
//     {firstName: "Braulio", lastName:"Calderon", email:"email2@email.com", subject:"Bye", message:"Bye"},
//     {firstName: "Braulio", lastName:"Calderon", email:"email2@email.com", subject:"Bye", message:"Bye"},
//     {firstName: "Braulio", lastName:"Calderon", email:"email2@email.com", subject:"Bye", message:"Bye"},
//     {firstName: "Braulio", lastName:"Calderon", email:"email2@email.com", subject:"Bye", message:"Bye"},
//     {firstName: "Braulio", lastName:"Calderon", email:"email2@email.com", subject:"Bye", 
//     message:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. N"},
//     {firstName: "Braulio", lastName:"Calderon", email:"email2@email.com", subject:"Bye", 
//     message:"ur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. N"},
//     {firstName: "Braulio", lastName:"Calderon", email:"email2@email.com", subject:"Bye", 
//     message:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. N"},
// ];

class AdminContact extends Component {

    constructor() {
        super();

        this.state = {
            thereAreMessages:false,
            messageArr:[]
        }
    }

    //create a function to get messages from database and put them into an array
    //if there are messages, set the thereAreMessages state to true
    //if there are NO messages, leave it false

    render() {

        if (this.state.thereAreMessages) {

            let arr = this.state.messageArr.map(e => <AdminContactCard firstName={e.firstName} lastName={e.lastName} email={e.email} subject={e.subject} message={e.message}/>);

            return (
                <div className="page-wrapper">
                    <header className="admin-header" id="admin-contact">
                        <h1>Manage Contact Page</h1>
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
                    <header className="admin-header" id="admin-contact">
                        <h1>Manage Contact Page</h1>
                    </header>
    
                    <div className="admin-nothing-found">
                        <h2>There are no messages at this time.</h2>
                    </div>
                </div>
            )
        }
    }
}

export default AdminContact;
