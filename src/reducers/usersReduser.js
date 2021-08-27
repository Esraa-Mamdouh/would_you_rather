import { GET_USERS , ADDQUESTION, ADDANSWER } from "../actions/types"

//state= users
export default function usersReducer(state=[],action){
    switch(action.types){
        case GET_USERS :
            return action.payload
        case ADDQUESTION:
            return(
                state.map(user=>{
                    console.log(user)    
                    //let questionAuthor=action.payload.author 
                    let questionID; 
                    if (action.payload.author  === user.id){
                        //user object
                        console.log("inside ADD_ANSWER reducer: ",user)
                        questionID=action.payload.id
                        user.questions=user.questions.concat([questionID])
                    }
                    return user
                    
                })
            )
            
        case ADDANSWER :

            return(
                state.map(user=>{
                    console.log(user)    
                    //let questionAuthor=action.payload.author 
                    let questionID; 
                    let option;
                    if (action.payload.authedUser  === user.id){
                        //user object
                        console.log("inside ADD_ANSWER reducer: ",user)
                        questionID=action.payload.qid;
                        option=action.payload.answer;
						user.answers[questionID] = option;
                        console.log("action",action)
                        console.log("useeeer",user)
                    }
                    return user
                    
                })
            )
        default: 
            return state
    }
}