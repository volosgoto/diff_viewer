import React, { Component } from "react";
import { connect } from "react-redux";

class RightColumn extends Component {
  onClick = () => {
    console.log("Clicked");
    this.props.showInfo();
  };

  render() {
    let { item } = this.props.rightListItem;
    console.log("right", this.props);
    return (
      <div className="col-sm-6">
        <h1 onClick={this.onClick}>Right column</h1>
        <div>{item && <h1>Right show onClick</h1>}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rightListItem: state.rightListItem
});

export default connect(
  mapStateToProps,
  dispatch => ({
    showInfo: () => {
      dispatch({ type: "SHOW_INFO" });
    }
  })
)(RightColumn);
