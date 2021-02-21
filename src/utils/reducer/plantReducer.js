import { ADD_PLANTS } from "./../actions/plantAction";
export const plantInitialValues = {
  plants: [
    {
      id: 1,
      name: "flowers",
      species: "flowers",
      sun: "half the day",
      plantImg:
        "https://images.unsplash.com/photo-1531875456634-3f5418280d20?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8cGxhbnRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
  ],
  error: "",
  fetching: "",
};

export const plantReducer = (state, action) => {
  switch (action.type) {
    case ADD_PLANTS:
      return {
        ...state,
        plants: [...state.plants, action.payload],
      };

    default:
      return state;
  }
};
