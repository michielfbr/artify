import axios from "axios";
import { apiUrl } from "../../config/constants";

//action creators
const paintingFetched = (data) => {
  return {
    type: "paintingFetched",
    payload: data,
  };
};

// Get paintings
export function fetchPainting() {
  return async function thunk(dispatch, getState) {
    try {
      const res = await axios.get(`${apiUrl}&toppieces=true&imgonly=true`);
      dispatch(paintingFetched(res.data.artObjects));
    } catch (e) {
      console.log(e);
    }
  };
}
