import React, { Component } from 'react';
import { connect } from 'react-redux';


class Users extends Component {

  showUsers = () => {
    return this.props.users.map((user, index)=>{
      console.log(user.username);
      return <li key={index}>{user.username}</li>
    })
  }

  render() {
    console.log('Users props', this.props);
    return (
      <div>
        <h1>Users: {this.props.userCount}</h1>
        <ul>
          {this.showUsers()}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
   }
}

export default connect(mapStateToProps)(Users)
