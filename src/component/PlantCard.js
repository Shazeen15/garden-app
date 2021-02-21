import React from "react";
import { connect } from "react-redux";
import Plant from "./Plant";

function PlantCard(props) {
  const { plants } = props;
  return (
    <>
      {plants.map((plant) => {
        return <Plant key={plant.id} plant={plant} />;
      })}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    plants: state.plants.plants,
  };
};

export default connect(mapStateToProps)(PlantCard);
