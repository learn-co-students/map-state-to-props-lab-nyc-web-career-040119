import React, { Component } from 'react';
import UserInput from './components/UserInput'
import { connect } from 'react-redux';
import ConnectedUsers from './components/Users'

class App extends Component {
  // handleOnClickUsers() {
  //   this.props.store.dispatch({
  //     type: 'GET_COUNT_OF_USERS',
  //     });
  //   }


  render() {

    console.log(this.props.store)
    return (
      <div className="App">
        <UserInput />
        <ConnectedUsers />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   // return {
//   //   hometown: state.items
//   // }
//
// }

// export default connect(mapStateToProps)(App);
export default App;
