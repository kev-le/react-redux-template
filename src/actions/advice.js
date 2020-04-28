import axios from 'axios';


export const GET_ADVICE_REQ = 'GET_ADVICE_REQ'
export const GET_ADVICE_SUCCESS  = 'GET_ADVICE_SUCCESS'
export const GET_ADVICE_ERROR = 'GET_ADVICE_ERROR'

export const getAdvice = () => {
    return dispatch => {
        dispatch({
            type: GET_ADVICE_REQ
        })

        // start api call to get payload
        return axios.get('https://api.adviceslip.com/advice').then(res => {
            console.log(res)
            dispatch({
                type: GET_ADVICE_SUCCESS,
                payload: res.data.slip.advice
            })
        }).catch(err => {
            console.err(err);
            dispatch({
                type: GET_ADVICE_ERROR
            })
        })
    }
}