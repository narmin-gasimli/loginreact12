import React from "react";

import Email from "./Email";
import Name from "./Name";
import Address from "./Address";
import PersonalInfo from "./PersonalInfo";

const Profil = ({ user }) => {
    const { email, name, address, personalInfo } = user;

    return (
        <div>
            <h1>Personal Profile</h1>
            <Email email = {email} />
            <Name  name = {name} />
            <Address address = {address} />
            <PersonalInfo personalInfo = {personalInfo} />
        </div>
    )
}

export default Profil;