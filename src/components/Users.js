import React, { Component } from 'react';
import { connect } from 'react-redux'



class Users extends Component {

//   handleOnClickItems() {
//   this.props.store.dispatch({
//     type: 'GET_COUNT_OF_ITEMS',
//   });
// }


  render() {
    const displayUsers = this.props.users.map(user => {
      return <li key={user.username}>{user.username}</li>
    })
    const displayUserCount = this.props.userCount

    return (
      <div>
        <ul>
        {this.props.userCount}
        {displayUsers}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // state.users
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users);
// export default Users;
