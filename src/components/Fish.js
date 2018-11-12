import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";


class Fish extends React.Component {
  // Static means it is valid for all the fish avoiding copying proptypes to every single fish
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string, 
      name: PropTypes.string, 
      price: PropTypes.number,
      desc: PropTypes.string, 
      status: PropTypes.string    
    }),
    addToOrder: PropTypes.func,
  }

  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };

  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">{name}</h3>
        <span className="price">{formatPrice(price)}</span>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? "Add To Order" : "Sold Out"}
        </button>
        <button onClick={() => this.props.removeFromOrder(this.props.index)}>
          {" "}
          Remove order{" "}
        </button>
      </li>
    );
  }
}

export default Fish;
