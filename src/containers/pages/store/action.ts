import { request } from "api/axios";
import { apiURL } from "api/url";
import * as types from "./constants";

// NewDetail
export const setDataNewDetail = (payload: any) => ({
  type: types.SET_NEW_DETAIL,
  payload,
});

export const getDataNewDetail = () => (dispatch: any) => {
  return request("get", apiURL.page.NEWS_DETAIL)
    .then(({ data }: { data: any }) => {
      // console.log(data);
      dispatch(setDataNewDetail(data));
    })
    .catch((error) => {
      console.log(error.response);
      dispatch(setDataNewDetail([]));
    });
};

// NewInformation
export const setDataNewInfo = (payload: any) => ({
  type: types.SET_NEW_INFORMATION,
  payload,
});

export const getDataNewInfo = () => (dispatch: any) => {
  return request("get", apiURL.page.NEWS_iNFORMATION)
    .then(({ data }: { data: any }) => {
      // console.log(data);
      dispatch(setDataNewInfo(data));
    })
    .catch((error) => {
      console.log(error.response);
      dispatch(setDataNewInfo([]));
    });
};

// Contact
export const setDataContact = (payload: any) => ({
  type: types.SET_CONTACT,
  payload,
});

export const getDataContact = () => (dispatch: any) => {
  return request("get", apiURL.page.CONTACT)
    .then(({ data }: { data: any }) => {
      // console.log(data);
      dispatch(setDataContact(data));
    })
    .catch((error) => {
      console.log(error.response);
      dispatch(setDataContact([]));
    });
};
