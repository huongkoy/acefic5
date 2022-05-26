import * as types from "./constants";
let initState = {
  aboutDataReduce: "",
  recruitDataReduce: "",
  fieldsDataReduce: "",
  newDataReduce: "",
  partnerDataReduce: "",
  projectDataReduce: "",
  categoryDataReduce: "",
};

const reducer = (state = initState, actions: any) => {
  // console.log(actions);
  switch (actions.type) {
    case types.SET_ABOUT:
      return {
        ...state,
        aboutDataReduce: actions.payload,
      };
    case types.SET_RECRUIT:
      return {
        ...state,
        recruitDataReduce: actions.payload,
      };
    case types.SET_FIELDS:
      return {
        ...state,
        fieldsDataReduce: actions.payload,
      };
    case types.SET_NEW:
      return {
        ...state,
        newDataReduce: actions.payload,
      };
    case types.SET_PARTNER:
      return {
        ...state,
        partnerDataReduce: actions.payload,
      };
    case types.SET_PROJECT:
      return {
        ...state,
        projectDataReduce: actions.payload,
      };
    case types.SET_CATEGORY:
      return {
        ...state,
        categoryDataReduce: actions.payload,
      };
    default:
      return state;
  }
};

export default reducer;
