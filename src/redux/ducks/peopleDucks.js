// TYPES
export const Types = {
  GET_REQUEST: "people/GET_REQUEST",
  GET_SUCCESS: "people/GET_SUCCESS",
  GET_ERROR: "people/GET_ERROR"
};

// REDUCER
const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function people(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case Types.GET_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
}

//ACTIONS
export const Creators = {
  getRequest: () => ({ type: Types.GET_REQUEST }),
  getSuccess: people => ({ type: Types.GET_SUCCESS, payload: people }),
  getError: () => ({ type: Types.GET_ERROR })
};
