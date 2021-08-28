import {GET_USERS} from './types'
import {_getUsers }from '../_DATA'

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
            console.log("inside userAction",users)
            dispatch(retrieveUsers(users))
        })
    }
}