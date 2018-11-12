import React from "react";
import PropTypes from "prop-types";


class AddFishForm extends React.Component {
  NameRef = React.createRef();
  PriceRef = React.createRef();
  FreshRef = React.createRef();
  DescRef = React.createRef();
  ImageRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func
  }

  createFish = e => {
    // 1. Stop the form from submitting
    e.preventDefault();
    const fish = {
      Name: this.NameRef.value.value,
      Price: parseFloat(this.PriceRef.value.value),
      Fresh: this.FreshRef.value.value,
      Desc: this.DescRef.value.value,
      Image: this.ImageRef.value.value
    };
    this.props.addFish(fish);
    //refresh the form
    e.currentTarget.reset();
  };

  render() {
    return (
      <div>
        <form className="fish-edit" onSubmit={this.createFish}>
          <input
            name="Name"
            ref={this.NameRef}
            type="text"
            placeholder="Fish Name"
          />
          <input
            name="Price"
            ref={this.PriceRef}
            type="text"
            placeholder="Fish Price"
          />
          <select name="Fresh" ref={this.FreshRef} type="text">
            <option value="available"> Fresh !</option>
            <option value="unavailable"> Sold Out !</option>
          </select>
          <textarea name="Desc" ref={this.DescRef} type="text" />
          <input
            name="Image"
            ref={this.ImageRef}
            type="text"
            placeholder="Fish Image"
          />
          <button type="submit"> Add Fish </button>
        </form>
      </div>
    );
  }
}

export default AddFishForm;
