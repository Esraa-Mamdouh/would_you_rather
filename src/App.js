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

import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Navigation/> */}
      {/* <Login/> */}
      {/* Esraa Mamdouh kkkk */}
      {/* < Leaderboard/> */}
      {/* <NewQuestion/> */}
      {/* <Home/> */}
      {/* <UnansweredQuestion/> */}
      <UnansweredList/>
      {/* <AansweredList/> */}
    </div>
  );
}

export default App;
// const mapStateToProps = (state) => ({
//   users: state.usersReducer.users
// })
// export default connect(mapStateToProps, { login, getUsers })(Login);

// const mapStateToProps = (state) => ({
//   currentUser: state.loginReducer.currentUser,
//   questions: state.questionsReducer.questions
// })
// export default connect(mapStateToProps, {})(App);
