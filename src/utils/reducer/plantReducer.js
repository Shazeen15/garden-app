import { SET_PLANTS } from "./../actions/plantAction";
export const initialValues = {
  plants: [
    {
      id: 1,
      name: "flowers",
      species: "flowers",
      sun: "half the day",
    },
  ],
  error: "",
  fetching: "",
};

export const plantReducer = (state, action) => {
  switch (action.type) {
    case SET_PLANTS:
      return {
        state,
      };

    default:
      return state;
  }
};
