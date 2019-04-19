import { ADD_BENEFICIARY_SUCCESS, ADD_BENEFICIARY_FAILURE } from './beneficiary'
import { ADD_TRANSACTION_SUCCESS, ADD_TRANSACTION_FAILURE } from './transaction'

export const ADD_FLASH_MESSAGE = 'app:add_flash_message'
export const DELETE_FLASH_MESSAGE = 'app:delete_flash_message'

const TYPE_SUCCESS = 'success'
const TYPE_ERROR = 'error'

export function addFlashMessage(message) {
  return {
    type: ADD_FLASH_MESSAGE,
    message
  }
}

export function deleteFlashMessage() {
  return {
    type: DELETE_FLASH_MESSAGE
  }
}

const failureMessage = () => {
  return (state, action) => ({
    ...state,
    flashMessage: {
      message: action.payload.response.message,
      errors: action.payload.response.errors || null,
      type: TYPE_ERROR
    }
  })
}

const ACTION_HANDLERS = {
  [ADD_BENEFICIARY_SUCCESS]: state => ({
    ...state,
    flashMessage: {
      message: 'Novo beneficiário adicionado',
      type: TYPE_SUCCESS
    }
  }),
  [ADD_TRANSACTION_SUCCESS]: state => ({
    ...state,
    flashMessage: {
      message: 'Transação efetuada com sucesso ',
      type: TYPE_SUCCESS
    }
  }),
  [ADD_BENEFICIARY_FAILURE]: failureMessage(),
  [ADD_TRANSACTION_FAILURE]: failureMessage()
}

const initialState = {
  flashMessage: []
};

export default function appReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}