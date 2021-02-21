export const ADD_PLANTS = "ADD_PLANTS";

export const addPlant = (newPlant) => {
  return { type: ADD_PLANTS, payload: newPlant };
};
