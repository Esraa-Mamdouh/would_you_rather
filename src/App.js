import './App.css';
import { connect } from 'react-redux'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Login/>
      {/* Esraa Mamdouh kkkk */}
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
