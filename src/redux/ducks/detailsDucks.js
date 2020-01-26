//TYPES
export const Types = {
  GET_REQUEST: "details/GET_REQUEST",
  GET_SUCCESS: "details/GET_SUCCESS",
  GET_MOVIES_REQUEST: "peopleDetails/GET_MOVIES_REQUEST",
  GET_PLANETS_REQUEST: "peopleDetails/GET_PLANETS_REQUEST",
  GET_STARSHIPS_REQUEST: "peopleDetails/GET_STARSHIPS_REQUEST",
  GET_MOVIES_SUCCESS: "peopleDetails/GET_MOVIES_SUCCESS",
  GET_PLANETS_SUCCESS: "peopleDetails/GET_PLANETS_SUCCESS",
  GET_STARSHIPS_SUCCESS: "peopleDetails/GET_STARSHIPS_SUCCESS",
  GET_FAILURE: "details/GET_FAILURE"
};

//STATE
const INITIAL_STATE = {
  data: {},
  loading: false
};

export default function details(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    default:
      return state;
  }
}

//CREATORS
export const Creators = {
  getRequest: payload => ({ type: Types.GET_REQUEST, payload }),
  getSuccess: payload => ({ type: Types.GET_SUCCESS, payload })
};
