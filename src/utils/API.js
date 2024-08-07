const { default: axios } = require("axios");

export const register = () => {
  return axios({
    method: "GET",
    url: `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000`,
    headers: {
      accept: "application/json",
    },
  });
};
