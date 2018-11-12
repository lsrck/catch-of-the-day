import React from "react";
import PropTypes from "prop-types";


class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string, 
      name: PropTypes.string, 
      price: PropTypes.number,
      desc: PropTypes.string, 
      status: PropTypes.string    
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func
  } 

  handleChange = e => {
    console.log(e.currentTarget.value);
    // update That fish
    //take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish);
  };
  render() {
    const fish = this.props.fish;
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={fish.price}
        />
        <select type="text" name="status" onChange={this.handleChange}>
          <option value="available"> Fresh!</option>
          <option value="unavailable"> Sold Out!</option>
        </select>
        <textarea
          type="text"
          name="desc"
          onChange={this.handleChange}
          value={fish.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={fish.image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
