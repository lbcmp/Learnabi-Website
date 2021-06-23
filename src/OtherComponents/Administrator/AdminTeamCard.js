import React, { Component } from 'react'
import './admin.css'
import No_Img_Avail from '../../Images/No_Img_Avail.png'

class AdminTeamCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            defaultAdded:false,
            firstName:this.props.firstName,
            lastName:this.props.lastName,
            jobTitle:this.props.jobTitle,
            imageUrl:this.props.imageUrl
        }
    }

    addDefaultImage = (event) => {
        if (!this.state.defaultAdded) {
            this.setState({defaultAdded:true, imageUrl:No_Img_Avail});
        }
    }

    render() {
        return (
            <div className="team-card">
                <div id="content">
                    <img src={this.state.imageUrl} onError={this.addDefaultImage} alt="Employee Image"></img>
                    <div>
                        <h4><b>Name: </b>{this.state.firstName} {this.state.lastName}</h4>
                        <h4><b>Job Title: </b>{this.state.jobTitle}</h4>
                    </div>
                </div>

                <div id="buttons">
                    <button id="edit">Edit</button>
                    <button id="delete">Delete</button>
                </div>
            </div>
        )
    }
}

export default AdminTeamCard;
