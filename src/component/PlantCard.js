import React, { useContext } from "react";
import PlantContext from "./../context/PlantContext";
import Plant from "./Plant";

function PlantCard() {
  const { plant } = useContext(PlantContext);
  return (
    <>
      {plant.plants.map((plant) => {
        return <Plant key={plant.id} plant={plant} />;
      })}
    </>
  );
}

export default PlantCard;
