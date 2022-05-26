import * as types from "./constants";
let initState = {
  headerDataReducer: "",
  footerDataReducer: "",
};

const reducer = (state = initState, action: any) => {
  switch (action.type) {
    case types.SET_HEADER:
      return {
        ...state,
        headerDataReducer: action.payload,
      };
    case types.SET_FOOTER:
      return {
        ...state,
        footerDataReducer: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
