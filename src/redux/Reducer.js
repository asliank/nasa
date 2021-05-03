import * as actions from "./ActionType";

const initialState = {
  getData: [],
  loading: false,
  error: null,
};

const getReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_REQUEST:
      return {
        ...state,
        loading: true,
        error: action.error,
      };
    case actions.GET_SUCCESS:
      return {
        ...state,
        getData: action.payload,
        loading: false,
      };
    case actions.GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default getReducer;
