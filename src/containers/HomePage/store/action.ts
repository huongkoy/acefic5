import * as types from "./constants";
import { apiURL } from "api/url";
import { request } from "api/axios";

// About
export const setDataAbout = (payload: any) => ({
  type: types.SET_ABOUT,
  payload,
});

export const getDataAbout = () => (dispatch: any) => {
  return request("get", apiURL.homepage.ABOUT)
    .then(({ data }: { data: any }) => {
      // console.log("dataaction", data);
      dispatch(setDataAbout(data));
    })
    .catch((error: any) => {
      if (error.response) {
        console.log(error.response.status);
      }
      dispatch(setDataAbout([]));
    });
};

// Recruit
export const setDataRecruit = (payload: any) => ({
  type: types.SET_RECRUIT,
  payload,
});

export const getDataRecruit = () => (dispatch: any) => {
  return request("get", apiURL.homepage.RECRUIT)
    .then(({ data }: { data: any }) => {
      // console.log("dataRecruit", data);
      dispatch(setDataRecruit(data));
    })
    .catch((error: any) => {
      if (error.response) {
        console.log(error.response.status);
      }
      dispatch(setDataRecruit([]));
    });
};

// Fields
export const setDataFields = (payload: any) => ({
  type: types.SET_FIELDS,
  payload,
});

export const getDataFields = () => (dispatch: any) => {
  return request("get", apiURL.homepage.FIELDS)
    .then(({ data }: { data: any }) => {
      // console.log(data);

      dispatch(setDataFields(data));
    })
    .catch((error: any) => {
      if (error.response) {
      }
      dispatch(setDataFields([]));
    });
};

// New
export const setDataNew = (payload: any) => ({
  type: types.SET_NEW,
  payload,
});

export const getDataNew = () => (dispatch: any) => {
  return request("get", apiURL.homepage.NEWS)
    .then(({ data }: { data: any }) => {
      // console.log("dataNew", data);
      dispatch(setDataNew(data));
    })
    .catch((error: any) => {
      if (error.response) {
      }
      dispatch(setDataNew([]));
    });
};

// Partner
export const setDataPartner = (payload: any) => ({
  type: types.SET_PARTNER,
  payload,
});

export const getDataPartner = () => (dispatch: any) => {
  return request("get", apiURL.homepage.PARTNER)
    .then(({ data }: { data: any }) => {
      // console.log(data);
      dispatch(setDataPartner(data));
    })
    .catch((error) => {
      if (error.response) {
      }
      dispatch(setDataPartner([]));
    });
};

//Project
export const setDataProject = (payload: any) => ({
  type: types.SET_PROJECT,
  payload,
});

export const getDataProject = (tab: any) => (dispatch: any) => {
  return request("get", apiURL.homepage.PROJECT)
    .then(({ data }: { data: any }) => {
      // console.log(data);
      dispatch(setDataProject(data));
    })
    .catch((error) => {
      console.log(error.response);
      dispatch(setDataProject([]));
    });
};

// category
export const setDataCategory = (payload: any) => ({
  type: types.SET_CATEGORY,
  payload,
});

export const getDataCategory = () => (dispatch: any) => {
  // console.log(tab);

  return request("get", apiURL.homepage.CATEGORY)
    .then(({ data }: { data: any }) => {
      // console.log(data);
      dispatch(setDataCategory(data));
    })
    .catch((error) => {
      console.log(error.response);
      dispatch(setDataCategory([]));
    });
};
