import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleRetrieveUsers } from '../actions/userActions'
import LeaderboardCard from './LeaderboardCard'

class Leaderboard extends Component {
    // state={
    //     sortedUsers:[]
    // }
    componentDidMount(){
        this.props.handleRetrieveUsers()
        // this.setState(()=>({
        //     sortedUsers:Array.from(this.props.users)
        //   }))
        //this.forceUpdate()

    }
    render() {
        console.log("sorted users1 =", this.props.sortedUsers )
        this.props.users.sort((a,b)=>{
            if((a.questions.length+ Object.keys(a.answers).length  ) >= (b.questions.length+ Object.keys(b.answers).length  )){
                console.log("inside condition true ")
                return -1
            }
            else {
                console.log("inside condition fasle ")
                return 1
            }
        })
        console.log("sorted users2 =", this.props.users )
        console.log("users = ", this.props.users)
        console.log("inside render", this.props.users)
        return (
            <div>
                <div>
                {this.props.users.map((user,index)=>(
                    < LeaderboardCard
                        key={user.id}
                        url= {user.avatarURL}
                        id= {user.id}
                        rank= {index+1}
                        answeredQuestions= { Object.keys(user.answers).length}
                        createdQuestions= {user.questions.length}
                        score= {Object.keys(user.answers).length+user.questions.length}
                    />
                    // <div key={user.id}>
                    // <p>User id: {user.id}</p>
                    // <p>number of answers: { Object.keys(user.answers).length}</p>
                    // <p>number of questions created: {user.questions.length}</p>
                    // <p>Total score: {Object.keys(user.answers).length+user.questions.length}</p>
                    // </div>
                ))}
                </div>
                {/* < LeaderboardCard/> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users,
  })
  // const mapDispatchToProps = dispatch =>({
  //     login: ()=> dispatch(login(user)),
  //     getUsers: ()=> dispatch(handleRetrieveUsers())
  // })
  export default connect(mapStateToProps,  { handleRetrieveUsers} )(Leaderboard);