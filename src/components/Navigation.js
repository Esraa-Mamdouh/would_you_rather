import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { login } from '../actions/loginAction'


import {
    Link
  } from "react-router-dom";
// import mikasa from './mikasa.jpg';

 class Navigation extends Component {
    handleLogout=(e)=>{
        // this.props.login={}
        const user={}
        this.props.login(user)
    }
    render() {
        const name='Esraa Mamdouh'
        // const url = mikasa
        return (
            <div >
                <Nav variant="tabs" defaultActiveKey="/home" style={{display:"flex", justifyContent:'space-between'}}>
                <Nav.Item>
                    {/* eventKey="link-1" href="/home"*/}
                    {/* <Link to="/home"> */}
                        <Nav.Link  as={Link} to="/home" eventKey="link-1" >Home</Nav.Link>
                    {/* </Link> */}
                </Nav.Item>
                <Nav.Item>
                    {/* href="/newquestion" */}
                    {/* <Link to="/new-question"> */}
                        <Nav.Link  as={Link} to="/new-question" eventKey="link-2">New Question</Nav.Link>
                    {/* </Link> */}
                </Nav.Item>
                <Nav.Item>
                    {/* href="/leaderboard" */}
                    {/* <Link to="/leaderboard"> */}
                    <Nav.Link  as={Link} to="/leaderboard" eventKey="link-3" >
                    Leaderboard
                    </Nav.Link>
                    {/* </Link> */}
                </Nav.Item>
                {/* user */}
                <div >
                    <p>Hello, {Object.keys(this.props.loginUser).length >0? this.props.loginUser.id : "New User" }     
                    <Button variant="danger" onClick={this.handleLogout} style={{display:'inline'}}>Logout</Button>
                    </p>
                    
                    {/* <img alt="avtar" src={url}/> */}
                </div>
                </Nav>
                
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
  export default connect(mapStateToProps,  { login } )(Navigation);
