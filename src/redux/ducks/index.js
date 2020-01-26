import { combineReducers } from "redux";

import people from "./peopleDucks";
import details from "./detailsDucks";

export default combineReducers({
  people,
  details
});
