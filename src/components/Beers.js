import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

import Beer from "./Beer";
import "./Beers.css";

class Beers extends React.Component {
  componentDidMount() {
    this.props.onFetchBeers();
  }

  render() {
    const { beers } = this.props;

    return (
      <div className="container">
        <h1>Beers List</h1>
        <div className="beer-list">
          {beers && beers.map(beer => <Beer beer={beer} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  beers: state.beersReducer.beers,
});
const mapDispatchToProps = dispatch => ({
  onFetchBeers: () => dispatch(actions.fetchBeers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Beers);
