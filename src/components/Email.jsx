import React, { Component } from "react";

class Email extends Component {
    render() {
        const {email}  = this.props;
        return(
            <div>
                <p>Email: {email}</p>
            </div>
        )
    }
}
export default Email;