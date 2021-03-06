import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as PeopleActions } from "../ducks/peopleDucks";

export default function* getPeople(action) {
  try {
    const result = yield call(api.get, `people/?page=${action.payload}`);
    yield put(PeopleActions.getSuccess(result.data.results));
  } catch (err) {
    console.log("Something went wrong", err);
    yield put(PeopleActions.getError());
  }
}
