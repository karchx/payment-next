import axios from "axios";

export default axios.create({
  baseURL: "https://api.sandbox.pagos360.com",
  headers: {
    "Content-type": "application/json",
  },
});
