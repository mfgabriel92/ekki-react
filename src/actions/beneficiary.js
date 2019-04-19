import { RSAA } from 'redux-api-middleware'

export const ADD_BENEFICIARY = 'beneficiary:add_beneficiary'
export const ADD_BENEFICIARY_SUCCESS = 'beneficiary:add_beneficiary_success'
export const ADD_BENEFICIARY_FAILURE = 'beneficiary:add_beneficiary_failure'
export const GET_BENEFICIARIES = 'beneficiary:get_beneficiaries'
export const GET_BENEFICIARIES_SUCCESS = 'beneficiary:get_beneficiaries_success'
export const GET_BENEFICIARIES_FAILURE = 'beneficiary:get_beneficiaries_failure'

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

export function getBeneficiaries(id) {
  return {
    [RSAA]: {
      endpoint: `http://localhost:8080/api/beneficiaries?userId=${id}`,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      types: [GET_BENEFICIARIES, GET_BENEFICIARIES_SUCCESS, GET_BENEFICIARIES_FAILURE]
    }
  }
}

const ACTION_HANDLERS = {
  [ADD_BENEFICIARY]: state => ({
    ...state,
    addBeneficiary: {
      progress: true,
      success: false,
      failure: false
    }
  }),
  [ADD_BENEFICIARY_SUCCESS]: state => ({
    ...state,
    addBeneficiary: {
      progress: false,
      success: true
    }
  }),
  [ADD_BENEFICIARY_FAILURE]: state => ({
    ...state,
    addBeneficiary: {
      progress: false,
      success: false,
      failure: true
    }
  }),
  [GET_BENEFICIARIES]: state => ({
    ...state,
    getBeneficiaries: {
      progress: true,
      success: false,
      failure: false
    }
  }),
  [GET_BENEFICIARIES_SUCCESS]: (state, action) => ({
    ...state,
    getBeneficiaries: {
      progress: false,
      success: true,
      beneficiaresList: action.payload
    }
  }),
  [GET_BENEFICIARIES_FAILURE]: state => ({
    ...state,
    getBeneficiaries: {
      progress: false,
      success: false,
      failure: true
    }
  })
};

const initialState = {
  addBeneficiary: {
    progress: false,
    success: false,
    failure: false
  },
  getBeneficiaries: {
    progress: false,
    success: false,
    failure: false,
    beneficiaresList: null
  }
};

export default function beneficiaryReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}