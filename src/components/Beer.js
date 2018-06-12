import React from "react";

import "./Beer.css";

class Beer extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { beer } = this.props;
    return (
      <div
        className="beer"
        onClick={() => (window.location.href = beer.image_url)}
        key={beer.sku}
      >
        <div className="beer-name">{beer.beer}</div>
        <div className="beer-brewery">{beer.brewery}</div>
        <div className="beer-size">{beer.size}</div>
        <div className="beer-price">{beer.price}</div>
        <div className="beer-alcohol">alc. {beer["alcohol_%"]} %</div>
        <div className="beer-rating">
          {beer.average_review_rating_0_to_5} / 5 ({beer.number_of_reviews})
        </div>
        <div
          className={`beer-qty ${beer.quantity_in_stock < 5 && "danger-qty"}`}
        >
          {beer.quantity_in_stock} left
        </div>
      </div>
    );
  }
}

export default Beer;
