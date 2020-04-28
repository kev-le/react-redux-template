import { 
    GET_ADVICE_SUCCESS,
    GET_ADVICE_REQ,
    GET_ADVICE_ERROR
} from '../actions/advice' 

const initialState = {
    text : ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ADVICE_REQ:
            return {
                ...state,
            }
        case GET_ADVICE_SUCCESS:
            return {
                ...state,
                text: action.payload
            }
        case GET_ADVICE_ERROR:
            return {
                ...state,
            }
        default:
            return state
    }
}
