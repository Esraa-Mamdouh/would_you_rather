import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
// import Form from 'react-bootstrap/Form'

import { connect } from 'react-redux'
import * from '../images'
import { handleRetrieveUsers } from '../actions/userActions'
import { handleRetrieveQuestions,handleAddAnswer } from '../actions/questionActions'

 class UnansweredCard extends Component {
    state = {
        option: "",
         //TODO: only for the test 
         question:{
            id: 'xj352vofupe1dqz9emx13r',
            author: 'johndoe',
            timestamp: 1493579767190,
            optionOne: {
              votes: ['johndoe'],
              text: 'write JavaScript',
            },
            optionTwo: {
              votes: ['tylermcginnis'],
              text: 'write Swift'
            }
          }
    }
       

     componentDidMount(){
        this.props.handleRetrieveQuestions()
        this.props.handleRetrieveUsers ()
     } 
    onClick = (value) => () =>{
        this.setState(()=>({
            option:value,
        }))
    }

    handleSubmit =(e)=>{
        // TODO: Add add answer logic
      }

    render() {
        console.log("users= ",this.props.users)
        console.log("questions= ",this.props.questions)
        let avatar;
        this.props.users.forEach((user)=>{
            if(user.id === this.state.question.author){
                console.log("inside avatar",avatar)
                avatar=user.avatarURL
            }
        })
        console.log("option is: ",this.state.option)
        return (
            <div>
                <div style={{display:"flex", justifyContent:'space-around' }}>
                <Card style={{ width: '18rem', }}>
                    {/* TODO: add author avatar photo later */}
                    <Card.Img variant="top" src="holder.js/100px180"/>
                    <Card.Body>
                        <Card.Title> 
                            {
                                 avatar   
                            }
                        </Card.Title>
                        <Card.Text >
                            
                                {/* <div style={{ float:'left'}}> */}
                                    <input type="radio" value="Male" name="gender" onClick={this.onClick("optionOne")}/> Option One 
                                {/* </div> */}
                                <br/>
                                {/* <div style={{ float:'left'}} > */}
                                    <input type="radio" value="Male" name="gender" onClick={this.onClick("optionTwo")} /> Option Two
                                {/* </div> */}
                                <br/>
                                {/* <div style={{marginTop:'40px',}}> */}
                                    <Button variant="primary" onClick={this.handleSubmit} style={{width: '12rem'}}>Submit</Button>
                                {/* </div> */}
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users,
    loginUser: state.login,
    questions : state.questions,
  })
  // const mapDispatchToProps = dispatch =>({
  //     login: ()=> dispatch(login(user)),
  //     getUsers: ()=> dispatch(handleRetrieveUsers())
  // })
  //TODO: retrieve users and questions for test 
  export default connect(mapStateToProps,  { handleRetrieveQuestions,handleRetrieveUsers,handleAddAnswer } )(UnansweredCard);