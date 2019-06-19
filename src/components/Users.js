import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {
  listUsers = () => {
    return this.props.users.map(user => {
      return (
        <li key={user.username}>
          {user.username} <br />
          {user.hometown}
        </li>
      )
    })
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          {this.props.users.length} Users!
          {this.listUsers()}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {
    users: state.users,
    instructors: ['tim', 'ali', 'seb']
  }
}

export default connect(mapStateToProps)(Users)
