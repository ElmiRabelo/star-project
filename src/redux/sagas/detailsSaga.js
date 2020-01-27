import { all, call, put } from "redux-saga/effects";
import api from "../../services/api";
import axios from "axios";

import { Creators as DetailsActions } from "../ducks/detailsDucks";

export default function* getDetails(action) {
  try {
    const details = yield call(api.get, `people/${action.payload}/`);
    const [species, homeworld] = yield all([
      call(axios.get, details.data.species),
      call(axios.get, details.data.homeworld)
    ]);
    // const films = yield all(
    //   details.data.films.map(film => call(axios.get, film))
    // );
    const data = {
      people: details.data,
      species: species.data.name,
      homeworld: homeworld.data.name
    };
    yield put(DetailsActions.getSuccess(data));
  } catch (err) {
    console.log("SOMETHIN WENT WRONG", err);
  }
}
