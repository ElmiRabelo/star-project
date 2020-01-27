//TYPES
export const Types = {
  GET_REQUEST: "information/GET_REQUEST",
  GET_SUCCESS: "information/GET_SUCCESS",
  GET_FAILURE: "information/GET_FAILURE"
};

//REDUCER
const INITIAL_STATE = {
  data: {},
  loading: false
};

export default function information(state = INITIAL_STATE, action) {
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
  getInformationRequest: payload => ({ type: Types.GET_REQUEST, payload }),
  getInformationSuccess: payload => ({ type: Types.GET_SUCCESS, payload }),
  getInformationFailure: payload => ({ type: Types.GET_FAILURE, payload })
};
