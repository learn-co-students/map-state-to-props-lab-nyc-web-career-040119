import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    const allUsers = this.props.users.map(u=>{
      return <li key={u.id}>{u.username}</li>
    })
    return (
      <div>
        <ul>
          {allUsers}
        </ul>
        {this.props.userCount}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  };
};

export default connect(mapStateToProps)(Users)
