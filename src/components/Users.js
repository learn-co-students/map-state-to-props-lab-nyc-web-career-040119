import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  renderUsers = () => {
    // console.log(mapStateToProps())
    return this.props.users.map( (user) =>{
      return <li> {user.username}</li>
    })
  }

  render() {

    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);
    console.log("render",this.props.users)
    console.log("render",this.renderUsers())

    return (
      <div>
        <ul>
          {this.props.numberOfUsers}
          {this.renderUsers()}

        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {

  return {
    users: state.users,
    numberOfUsers: state.users.length
}

}

export default connect(mapStateToProps)(Users)
