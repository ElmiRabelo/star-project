import { all, takeLatest } from "redux-saga/effects";
//Sagas
import getPeople from "./peopleSaga";
import getDetails from "./detailsSaga";
import getInformation from "./informationSaga";
//Ducks
import { Types as PeopleTypes } from "../ducks/peopleDucks";
import { Types as DetailsTypes } from "../ducks/detailsDucks";
import { Types as InformationTypes } from "../ducks/informationDucks";

export default function* rootSaga() {
  yield all([
    takeLatest(PeopleTypes.GET_REQUEST, getPeople),
    takeLatest(DetailsTypes.GET_REQUEST, getDetails),
    takeLatest(InformationTypes.GET_REQUEST, getInformation)
  ]);
}
