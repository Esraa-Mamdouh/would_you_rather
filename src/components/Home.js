import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { login } from '../actions/loginAction'
import { handleRetrieveQuestions } from '../actions/questionActions'
//TODO: for test
import { handleRetrieveUsers } from '../actions/userActions'

 class Home extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loginUser: state.login
  })
  // const mapDispatchToProps = dispatch =>({
  //     login: ()=> dispatch(login(user)),
  //     getUsers: ()=> dispatch(handleRetrieveUsers())
  // })
  export default connect(mapStateToProps,  { login,handleRetrieveQuestions,handleRetrieveUsers } )(Home);
