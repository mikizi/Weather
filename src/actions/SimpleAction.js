/*
 src/actions/simpleAction.js
*/

export const FETCH_BEGIN   = 'FETCH_BEGIN';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchBegin = () => ({
    type: FETCH_BEGIN
});

export const fetchSuccess = products => ({
    type: FETCH_SUCCESS,
    payload: { products }
});

export const fetchFailure = error => ({
    type: FETCH_FAILURE,
    payload: { error }
});

export function fetchAction() {

    return dispatch => {
        dispatch(fetchBegin());
        return fetch("//api.openweathermap.org/data/2.5/forecast?q=Tel Aviv District,IL&APPID=f8d9ccc453df0af4f364a77f0ffb9841")
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                console.log(json.list);
                dispatch(fetchSuccess(json.list));
                return json.list;
            })
            .catch(error => dispatch(fetchFailure(error)));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}