import { combineReducers } from "redux";

import people from "./peopleDucks";
import details from "./detailsDucks";
import information from "./informationDucks";

export default combineReducers({
  people,
  details,
  information
});
