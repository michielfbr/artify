import axios from "axios";
import { apiUrl } from "../../config/constants";

//action creators
const paintingFetched = (data) => {
  return {
    type: "paintingFetched",
    payload: data,
  };
};

// Get one painting
export function fetchPainting() {
  return async function thunk(dispatch, getState) {
    try {
      const res = await axios.get(`${apiUrl}`);
      console.log("response:", res);
      dispatch(paintingFetched(res.data));
    } catch (e) {
      console.log(e);
    }
  };
}
