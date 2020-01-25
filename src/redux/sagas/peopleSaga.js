import { call, put } from "redux-saga/effects";
import api from "../../services/api";

export default function* getPeople() {
  try {
    const result = yield call(api.get, "/people");
    console.log(result);
  } catch (err) {
    console.log("Something went wrong", err);
  }
}
