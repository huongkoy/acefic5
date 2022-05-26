import axios from "axios";

const requestApi = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
});

export const request = async (method: any, api: any) => {
  return requestApi({
    method: method,
    url: `${process.env.REACT_APP_API}${api}`,
  });
};
