import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Beers extends React.Component {
  componentDidMount() {
    this.props.onFetchBeers();
  }
  render() {
    return <div>Beers</div>;
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  onFetchBeers: () => dispatch(actions.fetchBeers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Beers);
