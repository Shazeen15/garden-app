import React from "react";

function AddForm() {
  return (
    <>
      <form>
        <div className="label">
          <label htmlFor="name">Name: </label>
          <label htmlFor="species">Species: </label>
          <label htmlFor="sun">Sun: </label>
          <label htmlFor="img">Select image:</label>
        </div>
        <div className="input">
          <input type="text" name="name" id="name" />
          <input type="text" name="species" id="species" />
          <input type="text" name="sun" id="sun" />
          <input type="file" id="img" name="img" accept="image/*" />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default AddForm;
