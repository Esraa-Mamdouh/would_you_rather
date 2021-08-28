import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux'
//import { login } from '../actions/loginAction'
import { handleAddQuestion, handleRetrieveQuestions } from '../actions/questionActions'
//TODO: for test
import { handleRetrieveUsers } from '../actions/userActions'


class NewQuestion extends Component {
    state={
        optionOne:"",
        optionTwo:"",
        valueOne: "" ,
        valueTwo:"",
    }
    onOptionOneChangeQuery=(value)=>{
        this.setState(()=>({
            optionOne:value,
            valueOne:value
        }))
    }
    onOptionTwoChangeQuery =(value)=>{
        this.setState(()=>({
            optionTwo:value,
            valueTwo:value
        }))
    }
    //TODO: add logic here
    handleSubmit=()=>{
        this.setState(()=>({
            valueOne:"",
            valueTwo:""
        }))
        this.props.handleAddQuestion({
            // author: this.props.loginUser,
            //TODO: for test 
            author:"johndoe",
            optionOneText: this.state.optionOne,
            optionTwoText: this.state.optionTwo,
        })
        this.props.handleRetrieveUsers()
        this.props.handleRetrieveQuestions()
    }
    render() {
        console.log("optionOne=",this.state.optionOne)
        console.log("optionTwo=",this.state.optionTwo)
        console.log("users= ", this.props.users)
        console.log("questions= ", this.props.questions)
        return (
            
            <div style={{display:"flex", justifyContent:'space-around' }}>
                <Card style={{ width: '33rem'}} >
                    {/* TODO: search how to add image here */}
                <Card.Body>
                    <Card.Title>Create new Question</Card.Title>
                    <Card.Text>
                        Complete the question
                    </Card.Text>
                    <Card.Text>
                       Would you rather...?
                    </Card.Text>
                    <input
                    type="text" 
                    placeholder="option one"
                    onChange={(event)=>this.onOptionOneChangeQuery(event.target.value)} 
                    value={this.state.valueOne}                    
                    />
                    <hr/>
                    <p>or</p>
                    <hr/>
                    <input
                    type="text" 
                    placeholder="option two"
                    onChange={(event)=>this.onOptionTwoChangeQuery(event.target.value)} 
                    value={this.state.valueTwo} 
                    />
                    <br/>
                    <Button  style={{ width: '28rem', margin:'20px'}} variant="primary" onClick={this.handleSubmit}>Submit</Button>
                </Card.Body>
                </Card>
            </div>
        )
    }
}
//TODO: get login from router
//add dummie data?
const mapStateToProps = (state) => ({
    users: state.users,
    loginUser: state.login,
    questions: state.questions,
  })
  export default connect(mapStateToProps,  {  handleAddQuestion,handleRetrieveUsers,handleRetrieveQuestions  } )(NewQuestion);
// `author`, `optionOneText`, and `optionTwoText`