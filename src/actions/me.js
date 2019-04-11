import { RSAA } from 'redux-api-middleware'

export const ME = 'app:me'
export const ME_SUCCESS = 'app:me_success'
export const ME_FAILURE = 'app:me_failure'

export function me() {
  return {
    [RSAA]: {
      endpoint: 'http://localhost:8080/api/me',
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
      types: [ME, ME_SUCCESS, ME_FAILURE]
    }
  }
}

const ACTION_HANDLERS = {
  [ME]: state => ({
    ...state,
    progress: true,
    success: false
  }),
  [ME_SUCCESS]: (state, action) => ({
    ...state,
    progress: false,
    success: true,
    me: action.payload
  }),
  [ME_FAILURE]: state => ({
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
  me: null
};

export default function meReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}