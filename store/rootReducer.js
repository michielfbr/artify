import { combineReducers } from "redux";
import Art from "./art/reducer"

const reducer = combineReducers({
  art: Art,
});

export default reducer;
