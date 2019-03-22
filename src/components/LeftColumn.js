import React, { Component } from "react";
import { connect } from "react-redux";

class LeftColumn extends Component {
  onClick = () => {
    console.log("Clicked");
    this.props.showInfo();
  };

  render() {
    let { item } = this.props.leftListItem;
    // console.log("leftList", this.props.leftListItem);
    return (
      <div className="col-sm-6">
        <h1 onClick={this.onClick}>Left column</h1>
        <div>{item && <h1>Left show onClick</h1>}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  leftListItem: state.leftListItem
});

export default connect(
  mapStateToProps,
  dispatch => ({
    showInfo: () => {
      dispatch({ type: "SHOW_INFO" });
    }
  })
)(LeftColumn);
