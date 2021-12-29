import { combineReducers } from "redux";
import Painting from "./painting/reducer";

const reducer = combineReducers({
  painting: Painting,
});

export default reducer;
