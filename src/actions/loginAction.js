import {LOGIN} from './types'

//receives user object
export  function login (user){
    return{
        type: LOGIN,
        payload: user
    }
}

