import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import questionsReducer from './questionsReducer'
import usersReducer from './usersReduser'

const mainReducer = combineReducers({    //store is object
    login: loginReducer,
    questions: questionsReducer,
    users: usersReducer,
  })

export default mainReducer;