import React, { Component } from 'react'
import No_Img_Avail from '../Images/No_Img_Avail.png'

class OurTeamCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName:this.props.firstName,
            lastName:this.props.lastName,
            jobTitle:this.props.jobTitle,
            imageUrl:this.props.imageUrl,
            defaultAdded:false
        }
    }

    addDefaultImage = (event) => {
        if (!this.state.defaultAdded) {
            this.setState({defaultAdded:true, imageUrl:No_Img_Avail});
        }
    }

    render() {
        return (
            <div className="ourTeam-card">
                <img src={this.state.imageUrl} onError={this.addDefaultImage} alt="Profile"></img>
                <div>
                    <h2><b>{this.state.firstName} {this.state.lastName}</b></h2>
                    <h3>{this.state.jobTitle}</h3>
                </div>
            </div>
        )
    }
}

export default OurTeamCard;
