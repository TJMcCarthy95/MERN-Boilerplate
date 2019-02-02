import axios from "axios";
import { api } from "Config";

export const action = (type, payload) => ({ type, payload });

export const API = (target, options = { method: "GET" }) =>
  axios(api + target, options)
    .then(res => res.data)
    .catch(err => console.error(err));
