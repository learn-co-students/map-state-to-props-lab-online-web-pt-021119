import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  users(){
    return (
      this.props.userCount > 0
        ? <div>
          {this.props.users.map((user, key) => <li key={key}>{user.username}</li>)}
          <p>Total Users: {this.props.userCount}</p>
        </div>
        : <div></div>
    )
  }

  render() {

    return (
      <div>
        <ul>
          Users!
          {this.users()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length }
}

export default connect(mapStateToProps)(Users);
