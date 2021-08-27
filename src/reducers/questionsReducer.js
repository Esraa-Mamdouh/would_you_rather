import { ADD_QUESTION, ADD_ANSWER, GET_QUESTIONS } from "../actions/types"

//state = questions
//Reducer 1--- it is a pure function takes old state and action as parameters and return a new state 
export default function questionsReducer(state=[],action){   //empty array of Questions
    switch(action.types){
        case ADD_QUESTION:
            return( 
                [action.payload, ...state]
                )
            //return  state.concat([action.payload])     // we used concat -- 1. it returns new array (doesn't modify state array)
        case  ADD_ANSWER:
            return(
                state.map(question=>{
                    console.log(question)    
                    let optionNumber ;   //optionOne or optionTwo
                    if (action.payload.qid === question.id){
                        //question object
                        console.log("inside ADD_ANSWER reducer: ",question)
                        optionNumber=action.payload.answer
                        question[optionNumber].votes=question[optionNumber].votes.concat([action.payload.authedUser])
                    }
                    return question
                    
                })
            )
        case GET_QUESTIONS:
            return (
                action.payload     
            )
        default:
            return state
    }
}