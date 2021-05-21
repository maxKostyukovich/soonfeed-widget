import { put } from 'redux-saga/effects';
import { getEvents } from "../api/fakeApi";
import ACTION from '../actions/actionTypes'

export function* getEventsSaga() {
    try {
        const data = yield getEvents();
        yield put({type: ACTION.GET_EVENTS_RESPONSE, events: data});
    } catch (err) {
        yield put({type: ACTION.EVENTS_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            } })
    }
}