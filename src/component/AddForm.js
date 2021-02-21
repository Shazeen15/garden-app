import React, { useState } from "react";
import { connect } from "react-redux";
import { addPlant } from "./../utils/actions/plantAction";

const initialFormValue = {
  id: Date.now(),
  name: "plant1",
  species: "",
  sun: "",
  // img: "",
};

function AddForm(props) {
  const { addPlant } = props;
  const [newPlant, setNewPlant] = useState(initialFormValue);

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(e.target.value);
    setNewPlant({
      ...newPlant,
      [e.target.name]: value,
    });
  };

  const submitNewPlant = (e) => {
    e.preventDefault();
    addPlant(newPlant);
  };

  return (
    <>
      <form onSubmit={submitNewPlant}>
        <label htmlFor="name">Name: </label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
          value={initialFormValue.name}
          placeholder="name of plants"
        />
        <br />
        <label htmlFor="species">Species: </label>
        <input
          onChange={handleChange}
          type="text"
          name="species"
          id="species"
          value={initialFormValue.species}
          placeholder="species of plants"
        />
        <br />
        <label htmlFor="sun">Sun: </label>
        <input
          onChange={handleChange}
          type="text"
          name="sun"
          id="sun"
          value={initialFormValue.sun}
          placeholder="how much sun plant needs"
        />
        {/* <label htmlFor="img">Select image:</label>
          <input
            type="file"
            id="img"
            name="img"
            value={initialFormValue.img}
            onChange={handleChange}
          /> */}
        <button>Submit</button>
      </form>
    </>
  );
}

export default connect(null, { addPlant })(AddForm);
