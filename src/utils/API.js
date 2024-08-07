import getToken from "./getToken";

const { default: axios } = require("axios");

export const register = () => {
  return fetch(
    "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://frontend.com"
  );
};
export const getListOfMails = () => {
  return axios({
    method: "GET",
    url: `https://hiring.reachinbox.xyz/api/v1/onebox/list`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${getToken.getAccessToken()}`,
    },
    "Content-Type": "application/json",
  });
};
