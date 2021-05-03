import * as actions from "..//redux/ActionType";
import GET_API from "../service/ApiService";

export const serachById = (url) => {
  return async (dispatch) => {
    dispatch({ type: actions.GET_REQUEST, error: null });
    try {
      const res = await GET_API(url);
      const {
        name,
        nasa_jpl_url,
        is_potentially_hazardous_asteroid,
      } = res.data;

      const data = { name, nasa_jpl_url, is_potentially_hazardous_asteroid };
      dispatch({ type: actions.GET_SUCCESS, payload: data });
    } catch (e) {
      dispatch({ type: actions.GET_FAILURE, error: e });
    }
  };
};

export const randomId = (url) => {
  return async (dispatch) => {
    dispatch({ type: actions.GET_REQUEST });
    try {
      const res = await GET_API(url);
      const obj = res.data.near_earth_objects;
      const data = obj[Math.floor(Math.random() * 20)];
      const urls = `https://api.nasa.gov/neo/rest/v1/neo/${data.id}?api_key=rchOydRl6eFK1Lzgw97e42BagIw1lMRCbruF9R37`;
      dispatch(serachById(urls));
    } catch (e) {
      dispatch({ type: actions.GET_FAILURE, error: e });
    }
  };
};
