import {takeLatest} from 'redux-saga/effects'
import ACTION from '../actions/actionTypes'
import { getEventsSaga } from "./eventSaga";

function* rootSaga() {
    yield takeLatest(ACTION.GET_EVENTS_ACTION, getEventsSaga);
}

export default rootSaga;