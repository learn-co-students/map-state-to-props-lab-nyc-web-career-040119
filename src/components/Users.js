import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <p>{this.props.users.length} Users</p>
        <ul>
          {this.props.users.map(user => (
            <li>
              <p>User: {user.username}</p>
              <p>Hometown: {user.hometown}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => ({ users: state.users })

export default connect(mapStateToProps)(Users)
