import React, { Component } from "react";

class Name extends Component {
    render() {
        const {name} = this.props;
        return(
            <div>
                <p>Name: {name}</p>
            </div>
        )
    }
}
export default Name;