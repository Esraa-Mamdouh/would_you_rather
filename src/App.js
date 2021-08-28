import './App.css';
import { connect } from 'react-redux'
import Login from './components/Login'
import Leaderboard from './components/Leaderboard'
import Navigation from './components/Navigation'


import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation/>
      {/* <Login/> */}
      {/* Esraa Mamdouh kkkk */}
      < Leaderboard/>
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
