import React, { Component } from 'react';
import { handleRetrieveUsers } from '../actions/userActions'
import { handleRetrieveQuestions } from '../actions/questionActions'
import UnansweredQuestion from './UnansweredQuestion'
import GeneralCard from './GeneralCard'

import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

import { connect } from 'react-redux'

import levi from "../images/levi.jpg";


class UnansweredList extends Component {
    componentDidMount(){
        this.props.handleRetrieveUsers()
        this.props.handleRetrieveQuestions()
     }
     //TODO: for test
    state = {
        id: 'sarahedo',
        name: 'Sarah Edo',
        avatarURL: levi,
        answers: {
          "8xf0y6ziyjabvozdd253nd": 'optionOne',
          "6ni6ok3ym7mf1p33lnez": 'optionTwo',
          "am8ehyc8byjqgar0jgpub9": 'optionTwo',
          "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
      }
    
    
    render() {
        //TODO: add it later when I set the login User 
        //const answered = Object.keys(this.props.loginUser.answers)
        const answered = Object.keys(this.state.answers)
        console.log("answered= ", answered)

        //let difference = arr1.filter(x => !arr2.includes(x));


        // const unanswered= this.props.questions.filter(question =>{
        //     answered.forEach(answeredQuestion=>{
        //         if(question.id !== answeredQuestion){
        //             console.log("inside unanswered question.id=", question.id, "inside answered =", answeredQuestion)
        //             //console.log("inside answered =", answeredQuestion)
        //             return question
        //         }
        //     })
        // })

        const unanswered=this.props.questions.filter(question => !answered.includes(question.id));
        console.log("un answered= ",unanswered)
        console.log("users=",this.props.users)
        console.log("questions=",this.props.questions)
        // let avatar;
        // users.forEach(user=>{
        //     if(qustion.author === this.props.user.id){
        //         avatar= user.avatarURL
        //     }
        // })
        //console.log("un answered= ", unanswered)
        return (
            <div>
                <div>
                    {
                        unanswered.map(unansweredQuestion=>{
                            const user=this.props.users.filter(user=>(
                                unansweredQuestion.author === user.id
                            ))[0]
                            return(
                                //TODO:
                                // <UnansweredQuestion
                                // key={unansweredQuestion.id}
                                // userid={user.id}
                                // avatar={user.avatarURL}
                                // optionOne={unansweredQuestion.optionOne.text}
                                // optionTwo={unansweredQuestion.optionTwo.text}
                                // />

                                <GeneralCard
                                key={unansweredQuestion.id}
                                userid={user.id}
                                avatar={user.avatarURL}
                                optionOne={unansweredQuestion.optionOne.text}
                                />
                            )
                        })
                        ///////////////////////////////////
                        // unanswered.map((unansweredQuestion)=>(
                        //         <UnansweredQuestion
                        //         key={unansweredQuestion.id}
                        //         // avatar={user.avatarURL}
                        //         //question={unansweredQuestion}
                        //         optionOne={unansweredQuestion.optionOne.text}
                        //         optionTwo={unansweredQuestion.optionTwo.text}
                        //         />
                            
                        // ))
                    }
                </div>
            </div>
         );
    }
}


const mapStateToProps = (state) => ({
    users: state.users,
    loginUser: state.login,
    questions : state.questions,
  })
//export default connect(mapStateToProps,  { login, handleRetrieveUsers } )(Login);
export default connect(mapStateToProps,  { handleRetrieveQuestions,handleRetrieveUsers} )(UnansweredList);
//export default UnansweredList;