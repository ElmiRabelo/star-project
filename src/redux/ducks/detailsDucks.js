//TYPES
export const Types = {
  GET_REQUEST: "details/GET_REQUEST",
  GET_SUCCESS: "details/GET_SUCCESS",
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
