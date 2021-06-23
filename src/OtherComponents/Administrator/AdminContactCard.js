import React, { Component } from 'react'
import './admin.css'

class AdminContactCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName:this.props.firstName,
            lastName:this.props.lastName,
            email:this.props.email,
            subject:this.props.subject,
            message:this.props.message,
        }
    }

    render() {
        return (
            <div className="contactCard">
                <div id="content">
                    <h4><b>Name:</b> {this.state.firstName} {this.state.lastName}</h4>
                    <h4><b>Email:</b> {this.state.email}</h4>
                    <h4><b>Subject:</b> {this.state.subject}</h4>
                    <h4><b>Message:</b> {this.state.message}</h4>
                </div>

                <div id="button-container"><button>Delete</button></div>
            </div>
        )
    }
}

export default AdminContactCard;
