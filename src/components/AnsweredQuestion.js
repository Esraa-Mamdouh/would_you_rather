import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

import ProgressBar from 'react-bootstrap/ProgressBar'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux'
//import avatar from '../images/levi.jpg'
import { handleRetrieveUsers } from '../actions/userActions'
import { handleRetrieveQuestions,handleAddAnswer } from '../actions/questionActions'
import PropTypes from 'prop-types';


 class AnsweredQuestion extends Component {
    componentDidMount(){
        //this.props.handleRetrieveQuestions()
        this.props.handleRetrieveUsers()
     } 
    render() {
        // const choice=this.props.loginuserchoice
        // const bg= choice== 
        const optionOneStatistics = Math.round((this.props.optionOneVotes/(this.props.optionOneVotes+ this.props.optionTwoVotes))*100) 
        const optionTwoStatistics = 100- optionOneStatistics
        console.log("optionOneStatistics ", optionOneStatistics, "optionTwoStatistics", optionTwoStatistics)
        return (
            <div>
                <div style={{display:"flex", justifyContent:'space-around' }}>
                <Card style={{ width: '18rem', }}>
                    {/* TODO: add author avatar photo later */}
                    <Card.Img variant="top" src={this.props.avatar}/>
                    <Card.Body>
                        <Card.Title>Asked by: {this.props.userid} </Card.Title>
                        <Card.Text style={{fontSize:'18px', fontWeight:'bold' }}>
                            Would you Rather
                        </Card.Text >
                        {/* <Card.Text> */}
                            {/* <Card  bg='warning' className="mb-2" > */}
                            <Card  bg={this.props.loginuserchoice === "optionOne"?'warning': 'light'} className="mb-2" >
                                <Card.Text>{this.props.optionOne}</Card.Text>
                                <ProgressBar now={optionOneStatistics} label={`${optionOneStatistics}%`} variant ='danger' />
                                <Card.Text>{`${this.props.optionOneVotes} out of ${this.props.optionOneVotes+ this.props.optionTwoVotes}`}</Card.Text>
                            </Card>
                            <Card  bg={this.props.loginuserchoice === "optionTwo"?'warning': 'light'} className="mb-2">
                                <Card.Text>{this.props.optionTwo}</Card.Text>
                                <ProgressBar now={optionTwoStatistics} label={`${optionTwoStatistics}%`} variant ='danger' />
                                <Card.Text>{`${this.props.optionTwoVotes} out of ${this.props.optionOneVotes+ this.props.optionTwoVotes}`}</Card.Text>
                            </Card>
                        {/* </Card.Text> */}
                    </Card.Body>
                </Card>
            </div>
            </div>
        )
    }
}

AnsweredQuestion.propTypes={
    avatar: PropTypes.string.isRequired,
    optionOne:PropTypes.string.isRequired,
    optionTwo:PropTypes.string.isRequired,
    userid:PropTypes.string.isRequired,
    loginuserchoice:PropTypes.string.isRequired,
    optionOneVotes: PropTypes.number.isRequired,
    optionTwoVotes: PropTypes.number.isRequired,
  }
const mapStateToProps = (state) => ({
    users: state.users,
    loginUser: state.login,
    questions : state.questions,
  })
export default connect(mapStateToProps,  { handleRetrieveUsers,handleAddAnswer } )(AnsweredQuestion);