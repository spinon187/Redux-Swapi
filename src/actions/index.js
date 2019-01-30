import axios from 'axios';


// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const GET_START = 'GET_START';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAIL = 'GET_FAIL';

export const getChar = () => dispatch => {
    dispatch({ type: GET_START });
    axios.get(`https://swapi.co/api/people/`)
        .then(res => dispatch({ type: GET_SUCCESS, payload: res.data.results}))
        .catch(err => dispatch({ type: GET_FAIL, payload: err}));
}