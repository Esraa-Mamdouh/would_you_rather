import './App.css';
import { connect } from 'react-redux'
import Login from './components/Login'
import Leaderboard from './components/Leaderboard'
import Navigation from './components/Navigation'
import NewQuestion from './components/NewQuestion'
import Home from './components/Home'
import UnansweredQuestion from './components/UnansweredQuestion'
import UnansweredList from './components/UnansweredList'
import AansweredList from './components/AnsweredList'
import ProtectedRoute from './components/ProtectedRoute'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        {/* this.props.loginUser ? */}
        <ProtectedRoute path="/home" component={Navigation}/>
          {/* {this.props.loginUser} */}
          
        <Route path="/leaderboard">
          {/* {this.props.loginUser} */}
          <Leaderboard/>
        </Route>
        <Route path="/add">
          {/* {this.props.loginUser} */}
          <NewQuestion/>
        </Route>
        {/* : */}
        {/* <Login /> */}
        
      </Switch>
        {/* -------------------- */}
        {/* <Navigation/> */}
        {/* <Login/> */}
        {/* Esraa Mamdouh kkkk */}
        {/* < Leaderboard/> */}
        {/* <NewQuestion/> */}
        {/* <Home/> */}
        {/* <UnansweredQuestion/> */}
        {/* <UnansweredList/> */}
        {/* <AansweredList/> */}
        {/* ----------------- */}
      </div>  
    </Router>                                   
  );
}

{/* <Router>
<Switch>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

          this.props.currentUser ?
              <MainFrame>
                  <Route exact path='/' component={Home} />
                  <Route path='//add' component={QuestionForm} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route path='/questions/:id' component={Question} />
              </MainFrame> : <Login /> */}
const mapStateToProps = (state) => ({
  loginUser: state.login,
  questions: state.questions,
})

export default connect(mapStateToProps, {})(App);
// const mapStateToProps = (state) => ({
//   users: state.usersReducer.users
// })
// export default connect(mapStateToProps, { login, getUsers })(Login);

// const mapStateToProps = (state) => ({
//   currentUser: state.loginReducer.currentUser,
//   questions: state.questionsReducer.questions
// })
// export default connect(mapStateToProps, {})(App);
