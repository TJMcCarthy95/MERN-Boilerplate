import { FETCH_PACKAGES, INITIALIZE_TECHNOLOGIES } from "./types";
import { action, API } from "./utils";

const APIPackages = (target = "", options) => API(`packages${target}`, options);

export const getPackages = () => dispatch => {
  dispatch(action(
    FETCH_PACKAGES,
    APIPackages()
  ));
}

export const initializePackages = () => dispatch => {
  dispatch(action(
    INITIALIZE_TECHNOLOGIES,
    APIPackages("/initialize")
  ));
}
