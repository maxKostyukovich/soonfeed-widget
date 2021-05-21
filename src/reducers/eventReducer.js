import ACTION from '../actions/actionTypes'
const initialState = {
    events: [],
    err: null
};
export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_EVENTS_RESPONSE: {
            return {
                ...state,
                events: action.events
            };
        }
        case ACTION.EVENTS_ERROR : {
            return {
                ...state,
                err: action.err,
            }
        }
        default: {
            return state;
        }
    }
}