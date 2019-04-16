import { routerReducer as router } from 'react-router-redux'
import app from './app'
import me from './me'
import beneficiary from './beneficiary'
import transaction from './transaction'

const reducers = {
  router,
  app,
  me,
  beneficiary,
  transaction
};

export default reducers;