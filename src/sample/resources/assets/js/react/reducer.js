import { combineReducers } from 'redux'

export function counter(state = {count: 0}, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: ++state.count
            }
        default:
            return state
    }
}

export const fetch = (state = {data: []}, action) => {
    switch(action.type) {
        case 'SET_FETCHED_DATA':
            return {
                ...state,
                data: action.payload.data
            }
        default:
            return state
    }
}

export default combineReducers({ counter, fetch })
