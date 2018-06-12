import React from "react";

import * as actions from "../actions";
import "./Filter.css";
import { connect } from "react-redux";

class Filter extends React.Component {
  changeMinMl = val => {
    this.setState({ minMl: val }, () => {
      this.props.onChangeMinMl(this.state.minMl);
    });
  };
  changeMaxMl = val => {
    this.setState({ maxMl: val }, () => {
      this.props.onChangeMaxMl(this.state.maxMl);
    });
  };
  changeMinPrice = val => {
    this.setState({ minPrice: val }, () => {
      this.props.onChangeMinPrice(this.state.minPrice);
    });
  };
  changeMaxPrice = val => {
    this.setState({ maxPrice: val }, () => {
      this.props.onChangeMaxPrice(this.state.maxPrice);
    });
  };

  render() {
    return (
      <div className="container">
        <div className="filter-inputs">
          <input
            onChange={event => this.changeMinMl(event.target.value)}
            placeholder="Min ml"
          />
          <input
            onChange={event => this.changeMaxMl(event.target.value)}
            placeholder="Max ml"
          />
          <input
            onChange={event => this.changeMinPrice(event.target.value)}
            placeholder="Min price"
          />
          <input
            onChange={event => this.changeMaxPrice(event.target.value)}
            placeholder="Max price"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  onChangeMinMl: val => dispatch(actions.changeMinMl(val)),
  onChangeMaxMl: val => dispatch(actions.changeMaxMl(val)),
  onChangeMinPrice: val => dispatch(actions.changeMinPrice(val)),
  onChangeMaxPrice: val => dispatch(actions.changeMaxPrice(val)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);
