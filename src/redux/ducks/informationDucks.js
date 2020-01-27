//TYPES
export const Types = {
  GET_REQUEST: "information/GET_REQUEST",
  GET_SUCCESS: "information/GET_SUCCESS",
  GET_FAILURE: "information/GET_FAILURA"
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
    case Types.GET_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}

//CREATORS
export const Creators = {
  getInformationRequest: payload => ({ type: Types.GET_REQUEST, payload }),
  getInformationSuccess: payload => ({ type: Types.GET_SUCCESS, payload }),
  getFailure: payload => ({ type: Types.GET_FAILURE, payload })
};
