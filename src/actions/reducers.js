import { routerReducer as router } from 'react-router-redux'
import app from './app'
import me from './me'
import beneficiary from './beneficiary'
import transaction from './transaction'
import history from './history'

const reducers = {
  router,
  app,
  me,
  beneficiary,
  transaction,
  history
};

export default reducers;