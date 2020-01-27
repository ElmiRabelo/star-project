import { all, call, put } from "redux-saga/effects";
import api from "../../services/api";
import axios from "axios";

import { Creators as DetailsActions } from "../ducks/detailsDucks";

export default function* getDetails(action) {
  try {
    //first, make an api request to get the information about a character
    const details = yield call(api.get, `people/${action.payload}/`);
    //with the information about the caracter, make new apis to get information about the specie and homeworld
    const [species, homeworld] = yield all([
      call(axios.get, details.data.species),
      call(axios.get, details.data.homeworld)
    ]);
    //format and send the data to the reducer
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
