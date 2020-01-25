import { all, takeLatest } from "redux-saga/effects";

import getPeople from "./peopleSaga";
import { Types as PeopleTypes } from "../ducks/peopleDucks";

export default function* rootSaga() {
  yield all([takeLatest(PeopleTypes.GET_REQUEST, getPeople)]);
}
