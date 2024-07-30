import axios from "axios";

import { rootUrl } from "../constants/constants";
import { expireDateHandler } from "./expireDateHandler";
import history from "./history";

const AuthStr = localStorage.getItem("token");

async function post(url, body = {}, authToken = "") {
  try {
    expireDateHandler();
    const res = await axios.post(`${rootUrl}${url}`, body, {
      headers: {
        authorization: AuthStr,
      },
    });
    return await res;
  } catch (error) {
    if (error?.response?.status === 404) {
      history.push("/404");
    }

    throw error;
  }
}

export default post;
