import { RSAA } from 'redux-api-middleware'

export const ADD_BENEFICIARY = 'beneficiary:add_beneficiary'
export const ADD_BENEFICIARY_SUCCESS = 'beneficiary:add_beneficiary_success'
export const ADD_BENEFICIARY_FAILURE = 'beneficiary:add_beneficiary_failure'

export function addBeneficiary(data) {
  return {
    [RSAA]: {
      endpoint: 'http://localhost:8080/api/beneficiaries',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      types: [ADD_BENEFICIARY, ADD_BENEFICIARY_SUCCESS, ADD_BENEFICIARY_FAILURE]
    }
  }
}

const ACTION_HANDLERS = {
  [ADD_BENEFICIARY]: state => ({
    ...state,
    progress: true,
    success: false,
    failure: false
  }),
  [ADD_BENEFICIARY_SUCCESS]: state => ({
    ...state,
    progress: false,
    success: true
  }),
  [ADD_BENEFICIARY_FAILURE]: state => ({
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
};

export default function beneficiaryReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}