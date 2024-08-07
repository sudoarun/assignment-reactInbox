export default {
  getAccessToken: () =>
    typeof window !== "undefined" ? localStorage.getItem("token") : "",
};
