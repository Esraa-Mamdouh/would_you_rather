import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

class ProtectedRoute extends Component {
    render() {
        const { component: Component, ...props } = this.props
        console.log("inside protected router and loginUser= ",this.props.loginUser, "and it is not empty",!empty(this.props.loginUser))
        return (
        <Route 
          {...props} 
          render={props => (
            !empty(this.props.loginUser) ?
              <Component {...props} /> :
              <Redirect to='/' />
              
          )} 
        />
        );
    }
}


  const mapStateToProps = (state) => ({
    loginUser: state.login,
  })
  
  export default connect(mapStateToProps, {})(ProtectedRoute)

  function empty(n){
	return !(!!n ? typeof n === 'object' ? Array.isArray(n) ? !!n.length : !!Object.keys(n).length : true : false);
}