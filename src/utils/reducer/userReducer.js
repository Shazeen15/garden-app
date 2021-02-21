import { SET_USER } from "./../actions/userAction";
export const userInitialValue = {
  user: {
    id: 1,
    userName: "Shazeen",
  },
  error: "",
  fetching: "",
};

export const userReducer = (state = userInitialValue, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: { ...state.user, userName: action.payload },
      };
    default:
      return state;
  }
};
