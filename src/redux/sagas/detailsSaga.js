import { all, call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as DetailsActions } from "../ducks/detailsDucks";

export default function* getDetails(action) {
  try {
    const response = yield call(api.get, `people/${action.payload}/`);
    console.log(response);
    yield put(DetailsActions.getSuccess(response.data));
  } catch (err) {
    console.log("SOMETHIN WENT WRONG", err);
  }
}
