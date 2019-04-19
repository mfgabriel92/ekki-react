import { RSAA } from 'redux-api-middleware'

export const ADD_TRANSACTION = 'transaction:add_transaction'
export const ADD_TRANSACTION_SUCCESS = 'transaction:add_transaction_success'
export const ADD_TRANSACTION_FAILURE = 'transaction:add_transaction_failure'
export const GET_TRANSACTIONS = 'transaction:get_transactions'
export const GET_TRANSACTIONS_SUCCESS = 'transaction:get_transactions_success'
export const GET_TRANSACTIONS_FAILURE = 'transaction:get_transactions_failure'

export function addTransaction(data) {
  return {
    [RSAA]: {
      endpoint: 'http://localhost:8080/api/transactions',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      types: [ADD_TRANSACTION, ADD_TRANSACTION_SUCCESS, ADD_TRANSACTION_FAILURE]
    }
  }
}

export function getTransactions(id) {
  return {
    [RSAA]: {
      endpoint: `http://localhost:8080/api/transactions?userId=${id}`,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      types: [GET_TRANSACTIONS, GET_TRANSACTIONS_SUCCESS, GET_TRANSACTIONS_FAILURE]
    }
  }
}

const ACTION_HANDLERS = {
  [ADD_TRANSACTION]: state => ({
    ...state,
    addTransaction: {
      progress: true,
      success: false,
      failure: false
    }
  }),
  [ADD_TRANSACTION_SUCCESS]: state => ({
    ...state,
    addTransaction: {
      progress: false,
      success: true
    }
  }),
  [ADD_TRANSACTION_FAILURE]: state => ({
    ...state,
    addTransaction: {
      progress: false,
      success: false,
      failure: true
    }
  }),
  [GET_TRANSACTIONS]: state => ({
    ...state,
    getTransactions: {
      progress: true,
      success: false,
      failure: false
    }
  }),
  [GET_TRANSACTIONS_SUCCESS]: (state, action) => ({
    ...state,
    getTransactions: {
      progress: false,
      success: true,
      transactions: action.payload
    }
  }),
  [GET_TRANSACTIONS_FAILURE]: state => ({
    ...state,
    getTransactions: {
      progress: false,
      success: false,
      failure: true
    }
  })
};

const initialState = {
  addTransaction: {
    progress: false,
    success: false,
    failure: false
  },
  getTransactions: {
    progress: false,
    success: false,
    failure: false,
    transactions: []
  }
};

export default function transactionReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}