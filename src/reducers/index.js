import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import questionReducer from './questionsReducer'
import userReducer from './usersReduser'

const mainReducer = combineReducers({    //store is object
    login: loginReducer,
    question: questionReducer,
    user: userReducer,
  })

export default mainReducer;