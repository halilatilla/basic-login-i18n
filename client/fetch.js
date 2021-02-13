import Axios from "axios";
import Cookies from "js-cookie";

const access_token = Cookies.get("token");

export const fetch = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: access_token ? `Bearer ${access_token}` : undefined,
  },
});
