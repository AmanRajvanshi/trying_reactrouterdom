import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <br />
        <Link to={"/about/" + this.state.name}>About -> </Link>
      </>
    );
  }
}
export default Contact;
