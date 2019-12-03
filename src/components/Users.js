import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {
 

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => <li>{user.username}</li>)}
        </ul>
        <div>
        <p>Amout of Users: {this.props.userCount}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length}
}
export default connect(mapStateToProps)(Users);

