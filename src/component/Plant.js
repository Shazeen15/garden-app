import React from "react";

function Plant({ plant }) {
  return (
    <>
      <h1>{plant.name}</h1>
      <p>{plant.sun}</p>
      <img src={plant.plantImg} alt="plant" />
    </>
  );
}

export default Plant;
