import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  renderUsers = () => {
    return this.props.username.map(user => {
      return <li>{user.username}</li>
    })
  }

  render() {
    console.log('user props', this.props)
    return (
      <div>
        <ul>
          {this.renderUsers()}
          {this.props.total}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state??', state)
  return {
    username: state.users,
    total: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
