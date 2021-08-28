import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
//import { login } from '../actions/loginAction'
import { handleRetrieveQuestions } from '../actions/questionActions'
//TODO: for test
import { handleRetrieveUsers } from '../actions/userActions'

 class Home extends Component {
     componentDidMount(){
        this.props.handleRetrieveUsers()
        this.props.handleRetrieveQuestions()
     }
    render() {
        return (
            <div>
                {/* <Nav variant="tabs" defaultActiveKey="/home" style={{display:"flex", justifyContent:'center'}}>
                <Nav.Item>
                        <Nav.Link  eventKey="answered-questions" >Answered Questions </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                        <Nav.Link  eventKey="unanswered-questions">Unanswered Questions</Nav.Link>
                </Nav.Item>
                </Nav> */}
                <Tabs variant="tabs" defaultActiveKey="/home" style={{display:"flex", justifyContent:'center'}}>
                    <Tab  eventKey="answered-questions" title="Answered Questions "> 

                    </Tab>
                    <Tab  eventKey="unanswered-questions"title="Unanswered Questions " > 

                    </Tab>
                </Tabs>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users,
    loginUser: state.login,
    questions: state.questions,
    
  })
  // const mapDispatchToProps = dispatch =>({
  //     login: ()=> dispatch(login(user)),
  //     getUsers: ()=> dispatch(handleRetrieveUsers())
  // })
  export default connect(mapStateToProps,  { handleRetrieveQuestions,handleRetrieveUsers } )(Home);
