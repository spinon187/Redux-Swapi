import {GET_START, GET_SUCCESS, GET_FAIL} from "../actions";

const initialState = {
  characters: [],
  isLoading: false,
  error: ''
  // Array characters, Boolean fetching, null error.
}

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_START:
      return{
          ...state,
          isLoading: true,
          error: ''
          
      }
    case GET_SUCCESS:
      return{
        ...state,
        characters: action.payload,
        isLoading: false,
        error: ''
      }
    case GET_FAIL:
      return{
        ...state,
        error: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
};
