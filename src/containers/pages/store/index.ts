import * as types from "./constants";
let initState = {
  newDetailDataReducer: "",
  newInfoDataReducer: "",
  contactReducer: "",
};

const reducer = (state = initState, actions: any) => {
  // console.log(actions);

  switch (actions.type) {
    case types.SET_NEW_DETAIL:
      return {
        ...state,
        newDetailDataReducer: actions.payload,
      };
    case types.SET_NEW_INFORMATION:
      return {
        ...state,
        newInfoDataReducer: actions.payload,
      };
    case types.SET_CONTACT:
      return {
        ...state,
        contactReducer: actions.payload,
      };
    default:
      return state;
  }
};

export default reducer;
