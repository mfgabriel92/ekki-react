import { RSAA } from 'redux-api-middleware'

export const GET_HISTORY = 'history:get_history'
export const GET_HISTORY_SUCCESS = 'history:get_history_success'
export const GET_HISTORY_FAILURE = 'history:get_history_failure'

export function getHistory(id) {
  return {
    [RSAA]: {
      endpoint: `http://localhost:8080/api/histories?userId=${id}`,
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
      types: [GET_HISTORY, GET_HISTORY_SUCCESS, GET_HISTORY_FAILURE]
    }
  }
}

const ACTION_HANDLERS = {
  [GET_HISTORY]: state => ({
    ...state,
    progress: true,
    success: false
  }),
  [GET_HISTORY_SUCCESS]: (state, action) => ({
    ...state,
    progress: false,
    success: true,
    histories: action.payload
  }),
  [GET_HISTORY_FAILURE]: state => ({
    ...state,
    progress: false,
    success: false,
    failure: true
  })
};

const initialState = {
  progress: false,
  success: false,
  failure: false,
  histories: null
};

export default function meReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}