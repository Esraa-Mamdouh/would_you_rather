import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
// import Form from 'react-bootstrap/Form'

import { connect } from 'react-redux'
//import avatar from '../images/levi.jpg'
import { handleRetrieveUsers } from '../actions/userActions'
import { handleRetrieveQuestions,handleAddAnswer } from '../actions/questionActions'
import PropTypes from 'prop-types';


 class UnansweredQuestion extends Component {
    state = {
        option: "",
    }
    // state = {
    //     option: "",
    //      //TODO: only for the test 
    //      question:{
    //         id: 'xj352vofupe1dqz9emx13r',
    //         author: 'johndoe',
    //         timestamp: 1493579767190,
    //         optionOne: {
    //           votes: ['johndoe'],
    //           text: 'write JavaScript',
    //         },
    //         optionTwo: {
    //           votes: ['tylermcginnis'],
    //           text: 'write Swift'
    //         }
    //       }
    // }
       

     componentDidMount(){
        //this.props.handleRetrieveQuestions()
        this.props.handleRetrieveUsers()
     } 
    onClick = (value) => () =>{
        this.setState(()=>({
            option:value,
        }))
        console.log("option is: ",this.state.option)
    }

    handleSubmit =(e)=>{
        // TODO: Add add answer logic
        e.preventDefault()
        this.props.handleAddAnswer(
            //TODO: add login user later
            //authedUser: this.props.authedUser,
            {
                answer: this.state.option,
                qid: this.props.qid,
                authedUser:'tylermcginnis',
            }
        )
        console.log("quid=",this.props.qid,"answer=",this.state.option)
        alert("answer submitted")

      }
     
    render() {
        //const question=this.props.question
        //TODO: for test add later 
        //console.log("users= ",this.props.avatar)
        //console.log("question= ",this.props.question)
        console.log("qid=",this.props.qid)
        // let avatar;
        // this.props.users.forEach((user)=>{
        //     if(user.id === this.state.question.author){
                
        //         avatar=user.avatarURL
        //         console.log("inside avatar",avatar)
        //     }
        // })
        console.log("option is: ",this.state.option)
        return (
                <div style={{display:"flex", justifyContent:'space-around' }}>
                <Card style={{ width: '18rem', }}>
                    {/* TODO: add author avatar photo later */}
                    {/* //TODO */}
                    {/* <Card.Img variant="top" src={this.props.avatar}/> */}
                    <Card.Img variant="top" src={this.props.avatar}/>
                    <Card.Body>
                        <Card.Title> Asked by:
                            {
                                this.props.userid   
                            }
                        </Card.Title>
                        <Card.Text style={{fontSize:'18px', fontWeight:'bold' }}>
                            Would you Rather
                        </Card.Text >
                        <Card.Text >
                            
                                {/* <div style={{ float:'left'}}> */}
                                    <input type="radio" value={this.props.optionOne} name="option" onClick={this.onClick("optionOne")}/> {this.props.optionOne} 
                                {/* </div> */}
                                <br/>
                                {/* <div style={{ float:'left'}} > */}
                                    <input type="radio" value={this.props.optionTwo} name="option" onClick={this.onClick("optionTwo")} /> {this.props.optionTwo}
                                {/* </div> */}
                                <br/>
                                {/* <div style={{marginTop:'40px',}}> */}
                                    <Button variant="primary" onClick={this.handleSubmit} style={{width: '12rem'}}>Submit</Button>
                                {/* </div> */}
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users,
    loginUser: state.login,
    questions : state.questions,
  })

UnansweredQuestion.propTypes={
    avatar: PropTypes.string.isRequired,
    //question:  PropTypes.object.isRequired,
    optionOne:PropTypes.string.isRequired,
    optionTwo:PropTypes.string.isRequired,
    userid:PropTypes.string.isRequired,
    qid:PropTypes.string.isRequired,

  }
  // const mapDispatchToProps = dispatch =>({
  //     login: ()=> dispatch(login(user)),
  //     getUsers: ()=> dispatch(handleRetrieveUsers())
  // })
  //TODO: retrieve users and questions for test 
  export default connect(mapStateToProps,  { handleRetrieveUsers,handleAddAnswer } )(UnansweredQuestion);