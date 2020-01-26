import { all, takeLatest } from "redux-saga/effects";

import getPeople from "./peopleSaga";
import getDetails from "./detailsSaga";
import { Types as PeopleTypes } from "../ducks/peopleDucks";
import { Types as DetailsTypes } from "../ducks/detailsDucks";

export default function* rootSaga() {
  yield all([
    takeLatest(PeopleTypes.GET_REQUEST, getPeople),
    takeLatest(DetailsTypes.GET_REQUEST, getDetails)
  ]);
}
