import { GET_USERS , ADD_QUESTION, ADD_ANSWER } from "../actions/types"

//state= users
export default function usersReducer(state=[],action){
    console.log("inside userReducer",action.type,action.payload)
    //console.log("inside userReducer",action.type, Object.values(action.payload))
    switch(action.type){
        case GET_USERS :
            console.log("inside userReducer",action.payload)
            // if(Object.keys(obj).length !== 0){}
            return Object.values(action.payload)
            // let fetchedUsers = []
            // for (const id in action.payload) {
            //     fetchedUsers.push(action.payload[id])
            // }
            // return (
            //     fetchedUsers 
            // )
        case ADD_QUESTION:
            console.log("inside userReducer2",action.payload)
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
            
        case ADD_ANSWER :
            console.log("inside userReducer3",action.payload)
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
            console.log("inside userReducer4",action.payload)
            return state
    }
}