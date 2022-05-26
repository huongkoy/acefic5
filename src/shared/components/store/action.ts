import * as types from "./constants";
import { apiURL } from "api/url";
import { request } from "api/axios";

// Header
export const setDataHeader = (payload: any) => ({
  type: types.SET_HEADER,
  payload,
});

export const getDataHeder = () => (dispatch: any) => {
  return request("get", apiURL.homepage.HEADER)
    .then(({ data }: { data: any }) => {
      // console.log(data);
      dispatch(setDataHeader(data));
    })
    .catch((error) => {
      if (error.response) {
      }
      console.log(error.response);
      dispatch(setDataHeader([]));
    });
};

// Footer
export const setDataFooter = (payload: any) => ({
  type: types.SET_FOOTER,
  payload,
});

export const getDataFooter = () => (dispatch: any) => {
  return request("get", apiURL.homepage.FOOTER)
    .then(({ data }: { data: any }) => {
      // console.log("dataaction", data);
      dispatch(setDataFooter(data));
    })
    .catch((error: any) => {
      if (error.response) {
        console.log(error.response);
      }
      dispatch(setDataFooter([]));
    });
};
