import axios from 'axios'
// import fetch from 'isomorphic-fetch'

import { call, put, takeEvery } from 'redux-saga/effects'

import { setFetchedData as setFetchedDatAction } from './action'

const api = async () => {
    const res = await axios('/api')
    return res.data
}

function* fetchJsonTestData() {
    try {
        const data = yield call(api)
        yield put(setFetchedDatAction(data))
    } catch(e) {
        throw e
    }
}

function* sagaRoot() {
    yield takeEvery('FETCH_DATA', fetchJsonTestData)
}

export default sagaRoot
