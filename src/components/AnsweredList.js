import React, { Component } from 'react';
import { handleRetrieveUsers } from '../actions/userActions'
import { handleRetrieveQuestions } from '../actions/questionActions'
import UnansweredQuestion from './UnansweredQuestion'
import AnsweredQuestion from './AnsweredQuestion'


import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

import { connect } from 'react-redux'
//TODO: for test
import levi from "../images/levi.jpg";

class AnsweredList extends Component {

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
        console.log("users=",this.props.users)
        const answeredids = Object.keys(this.state.answers)
        console.log("answeredids= ", answeredids)
        const answered=this.props.questions.filter(question => answeredids.includes(question.id));
        console.log("answered= ", answered)
        return (
            <div>
                <div>
                    {
                        answered.map(answeredQuestion=>{
                            const user=this.props.users.filter(user=>(
                                answeredQuestion.author === user.id
                            ))[0]
                            //TODO: add login user later
                            console.log("answered by user= QUestion:",answeredQuestion.id," answer= ",this.state.answers[answeredQuestion.id] )
                            return(
                                /*
                                <UnansweredQuestion
                                key={answeredQuestion.id}
                                userid={user.id}
                                avatar={user.avatarURL}
                                optionOne={answeredQuestion.optionOne.text}
                                 optionTwo={answeredQuestion.optionTwo.text}
                                />
                                */
                               <AnsweredQuestion
                               key={answeredQuestion.id}
                                userid={user.id}
                                avatar={user.avatarURL}
                                optionOne={answeredQuestion.optionOne.text}
                                 optionTwo={answeredQuestion.optionTwo.text}
                                 loginuserchoice= {this.state.answers[answeredQuestion.id] }  // TODO: add login user instead
                                 optionOneVotes={answeredQuestion.optionOne.votes.length}
                                 optionTwoVotes={answeredQuestion.optionTwo.votes.length}
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
export default connect(mapStateToProps,{handleRetrieveQuestions,handleRetrieveUsers} )(AnsweredList);
