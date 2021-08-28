import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

//import { Button } from 'react-bootstrap'

class LeaderboardCard extends Component {
    //  TODO: remove this state and use users from store
     
    render() {
        return (
            // TODO: display grid leader board
            <div style={{display:"flex", justifyContent:'space-around' }}>
                <Card style={{ width: '18rem', }}>
                    {/* TODO: add photo later */}
                    <Card.Img variant="top" src={this.props.url}/>
                    <Card.Body>
                        <Card.Title>{this.props.id}</Card.Title>
                        <Card.Title>Rank: {this.props.rank}</Card.Title>
                        <Card.Text>
                            <div>
                                {/* TODO: add dynamic data later */}
                                <p>Answered Questions: {this.props.answeredQuestions}</p>
                                <p>Created Questions: {this.props.createdQuestions}</p>
                                <p>Score: {this.props.score}</p>
                                
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
LeaderboardCard.propTypes={
    url: PropTypes.string.isRequired,
    id:  PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired ,
    answeredQuestions: PropTypes.number.isRequired,
    createdQuestions: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired
  }
export default LeaderboardCard;