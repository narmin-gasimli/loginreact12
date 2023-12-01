import React, { Component } from "react";

class Address extends Component {
  render() {
    const { address } = this.props;
    return (
      <div>
        <p>Address: {address}</p>
      </div>
    );
  }
}

export default Address;