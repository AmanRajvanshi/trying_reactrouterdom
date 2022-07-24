import React, { Component } from "react";
import { useParams } from "react-router-dom";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      about_name: this.props.params.name
    };
  }

  componentDidMount() {}

  render() {
    return <p>{this.props.params.name}</p>;
  }
}
export default (props) => <About {...props} params={useParams()} />;
