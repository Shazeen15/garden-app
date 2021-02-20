import React from "react";

function Plant({ plant }) {
  return (
    <>
      <h1>{plant.name}</h1>
      <p>{plant.sun}</p>
    </>
  );
}

export default Plant;
