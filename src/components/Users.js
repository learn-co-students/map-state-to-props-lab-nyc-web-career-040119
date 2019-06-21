import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {



  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          {this.props.users.map((user) => {
            return <li> {user.username}  </li>
            }
          )}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}
// console.log(mapStateToProps);
export default connect(mapStateToProps)(Users)
