import {ADD_QUESTION, ADD_ANSWER, GET_QUESTIONS} from './types'
import {_saveQuestionAnswer, _saveQuestion, _getQuestions}from '../_DATA.js'

// action creater functions 
function addQuestionAction (question){
    return{
        type: ADD_QUESTION,
        payload: question
    }
}
 function addAnswerAction (answer){
    return{
        type: ADD_ANSWER,
        payload: answer
    }
}
function retrieveQuestions (questions){
    return{
        type: GET_QUESTIONS,
        payload: questions
    }
}

//API handlers + action creaters 

//receives ({author,optionOneText,optionTwoText})
export function handleAddQuestion(question){
    return (dispatch)=>{
        _saveQuestion(question).then((q)=>
        dispatch( addQuestionAction(q)))
        
    }
}

//receives({authedUser,qid,answer})
export function handleAddAnswer (answer){
    return(dispatch)=>{
        _saveQuestionAnswer(answer).then((a)=>{
            dispatch(addAnswerAction(a))
        })
        
    }
} 

//receives nothing
export function handleRetrieveQuestions (){
    return(dispatch)=>{
        _getQuestions().then((questions)=>{
            dispatch(retrieveQuestions(questions))
        })
    }
} 
