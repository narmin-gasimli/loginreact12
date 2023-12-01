import React, { Component } from "react";

class PersonalInfo extends Component {
    render(){
        const {personalInfo} = this.props;
        return(
            <div>
                <p>Personal Information: {personalInfo}</p>
            </div>
        )
    }
}
export default PersonalInfo;