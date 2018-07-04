export const increment = () => ({
    type: 'INCREMENT'
})

export const fetchData = () => ({
    type: 'FETCH_DATA'
})

export const setFetchedData = payload => ({
    type: 'SET_FETCHED_DATA',
    payload
})
