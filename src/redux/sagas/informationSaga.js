import { all, call, put } from "redux-saga/effects";
import axios from "axios";
import { getData } from "../../services/utils";

import { Creators as InformationActions } from "../ducks/informationDucks";

export default function* getInformation(action) {
  try {
    const { vehicles, films, starships } = action.payload;

    //make an api request for each item in the resources array
    const filmsResp = yield all(films.map(film => call(axios.get, film)));
    const vehiclesResp = yield all(
      vehicles.map(vehicle => call(axios.get, vehicle))
    );
    const starshipsResp = yield all(
      starships.map(starship => call(axios.get, starship))
    );
    //Format and send the data to the reducer
    const data = {
      vehicle: getData(vehiclesResp),
      films: getData(filmsResp),
      starships: getData(starshipsResp)
    };
    yield put(InformationActions.getInformationSuccess(data));
  } catch (err) {
    console.log("SOMETHIN WENT WRONG", err);
  }
}
