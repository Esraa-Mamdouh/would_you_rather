import {GET_USERS} from './types'
import {_getUsers }from '../_DATA.js'

function retrieveUsers (users){
    return{
        type: GET_USERS,
        payload: users
    }
}

//receives nothing
export  function handleRetrieveUsers (){
    return(dispatch)=>{
        _getUsers().then((users)=>{
            dispatch(retrieveUsers(users))
        })
    }
}