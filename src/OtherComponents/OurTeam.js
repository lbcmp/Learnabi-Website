import React, { Component } from 'react'

import TeamHeader from '../Images/team-header.png'

class OurTeam extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <header id="ourTeam-header">
                    <img src={TeamHeader} alt="Team Header"></img>
                </header>
            </div>
        )
    }
}

export default OurTeam;