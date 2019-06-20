import React, { Component } from 'react';
import {connect} from 'react-redux'
class Users extends Component {
  renderUsers = () => {
    console.log('inside renderUsers', this.props.users)
    return this.props.users.map(user=>{return <li>Username: {user.username} Hometown: {user.hometown}</li>})
  }
  render() {
    console.log("from Users", this.props.users)
    return (
      <div>
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps(state, props){
  return {users: state.users}
}
export default connect(mapStateToProps)(Users)
