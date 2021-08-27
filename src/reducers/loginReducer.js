import { LOGIN } from "../actions/types"

//state= login 
//Reducer 1--- it is a pure function takes old state and action as parameters and return a new state 
export default function loginReducer(state={},action){    //assume state is empty object(no user)
    switch (action.type){
        case LOGIN:
            return action.payload;     //return user object 
        default:
            return state;
    }
    
}