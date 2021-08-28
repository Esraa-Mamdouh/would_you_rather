import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { connect } from 'react-redux'
import { login } from '../actions/loginAction'
import { handleRetrieveUsers } from '../actions/userActions'

// TODO: Add react Router logic
class Login extends Component {
    state={
        option:"Select User"
    }
    componentDidMount(){
        this.props.handleRetrieveUsers()
        //this.forceUpdate()
    }
    handleSelect=(e)=>{
            console.log(e);
            this.setState(()=>({option:e}))
          }
    
    handleLogin =(e)=>{
        // TO DO: Add login logic
        this.props.users.forEach((user)=>{
            if(user.id === this.state.option){
                console.log("user =",user)
                this.props.login(user)
            }
        })
       
      }
    render() {
        console.log("users=", this.props.users)
        console.log("login user =", this.props.l)
        return (
            <div style={{display:"flex", justifyContent:'space-around' }}>
                <Card style={{ width: '25rem'}} >
                    {/* TODO: search how to add image here */}
                <Card.Img variant="top" src="../eren.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Welcome to Would you rather, please login to continue
                    </Card.Text>
                    <DropdownButton alignRight title={this.state.option}  id="dropdown-menu-align-right" style={{ margin :'20px'}}
                    onSelect={this.handleSelect}
                    >
                        {/* TO DO: make this dropdown dynamic with users get from API */}
                        {
                            this.props.users.map((user)=>(
                                <Dropdown.Item key={user.id} eventKey={user.id}>{user.id}</Dropdown.Item>
                            ))
                        }
                                {/* <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>

                                <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>

                                <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item> */}

                                

                        </DropdownButton>
                    <Button variant="primary" onClick={this.handleLogin}>Login</Button>
                </Card.Body>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  users: state.users,
  l: state.login
})
// const mapDispatchToProps = dispatch =>({
//     login: ()=> dispatch(login(user)),
//     getUsers: ()=> dispatch(handleRetrieveUsers())
// })
export default connect(mapStateToProps,  { login, handleRetrieveUsers } )(Login);