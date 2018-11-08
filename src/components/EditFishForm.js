import React from "react";

class EditFishForm extends React.Component {
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
