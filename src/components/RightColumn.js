import React, { Component } from "react";

class RightColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: false
    };
  }

  onClick = () => {
    return this.setState({
      item: !this.state.item
    });
  };

  render() {
    let { item } = this.state;
    return (
      <div className="col-sm-6">
        <h1 onClick={this.onClick}>Right column</h1>
        <div>{item && <h1>Right show onClick</h1>}</div>
      </div>
    );
  }
}

export default RightColumn;
