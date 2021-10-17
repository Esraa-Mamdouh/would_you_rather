import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

import { Button } from 'react-bootstrap'


import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux'
//import avatar from '../images/levi.jpg'
import { handleRetrieveUsers } from '../actions/userActions'
import { handleRetrieveQuestions,handleAddAnswer } from '../actions/questionActions'
import PropTypes from 'prop-types';

class GeneralCard extends Component {
    render() {
        return (
            <div style={{display:"flex", justifyContent:'space-around' }}>
                <Card style={{ width: '18rem', }}>
                    {/* TODO: add author avatar photo later */}
                    {/* //TODO */}
                    {/* <Card.Img variant="top" src={this.props.avatar}/> */}
                    <Card.Img variant="top" src={this.props.avatar}/>
                    <Card.Body>
                        <Card.Title> 
                            {
                                `Asked by: ${this.props.userid} `  
                            }
                        </Card.Title>
                        <Card.Text style={{fontSize:'18px', }}>
                            Would you Rather
                        </Card.Text >
                        <Card.Text >
                            
                                {this.props.optionOne}.... 
                                
                                {/* </div> */}
                                <br/>
                                {/* TODO: TO add view poll and vote or view poll according to if it is answered or un answered */}
                                    <Button variant="primary" onClick={this.handleSubmit} style={{width: '12rem'}}>View poll</Button>
                                {/* </div> */}
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

GeneralCard.propTypes={
    avatar: PropTypes.string.isRequired,
    //question:  PropTypes.object.isRequired,
    optionOne:PropTypes.string.isRequired,
    userid:PropTypes.string.isRequired,

  }
const mapStateToProps = (state) => ({
    users: state.users,
    loginUser: state.login,
    questions : state.questions,
  })
export default connect(mapStateToProps,  { handleRetrieveUsers,handleAddAnswer } )(GeneralCard);