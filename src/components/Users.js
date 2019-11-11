import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {

    return (
      <div>
        <ul>
          Users!
          {this.props.userCount > 0
            ? this.props.users.map((user, key) => <li key={key}>{user.username}</li>)
            : <div></div>
          }
        </ul>
        {this.props.userCount > 0
          ? <p>Total Users: {this.props.userCount}</p>
          : <div></div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length }
}

export default connect(mapStateToProps)(Users);
