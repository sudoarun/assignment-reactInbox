import configFile from "./config";
import getToken from "./getToken";

const { default: axios } = require("axios");

export const register = () => {
  location.href = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${configFile.redirectURL}`;
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
