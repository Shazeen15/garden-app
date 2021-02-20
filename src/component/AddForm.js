import React from "react";

function AddForm() {
  return (
    <>
      <form>
        <div className="label">
          <label htmlFor="name">Name: </label>
          <label htmlFor="species">Species: </label>
        </div>
        <div className="input">
          <input type="text" name="name" id="name" />
          <input type="text" name="species" id="species" />
        </div>

        <br />
      </form>
    </>
  );
}

export default AddForm;
