import React, { Component } from "react";
import { connect } from "react-redux";
import Dispatcher from "../../actions";

class LandingPage extends Component {
  componentDidMount() {
    this.props.appLoaded();
  }
  render() {
    return (
      <div>
        <h1>Welcome to Landing Page</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, Dispatcher)(LandingPage);
