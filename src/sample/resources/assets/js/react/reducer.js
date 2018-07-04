const initialState = {
    count: 0
}

export default function reducer(state = initialState, action) {
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
