import axios from "axios";
const backend = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_deployedLink
      : process.env.REACT_APP_dummyLink,
});

export default backend;
