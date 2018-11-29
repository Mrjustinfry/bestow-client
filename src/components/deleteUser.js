import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {deleteUser} from '../actions/actions';

import './deleteUser.css';

export class DeleteUser extends Component {
  constructor(props) {
    super(props);
  }

  deleteUser() {
    this.props.deleteUser(this.props.userId);
  }

  render() {
    return (
      <div className='deleteBox'>
        <h1 className="youSure">Are you sure you want to delete your account?</h1>
          <h2 className="permanent">This cannot be undone</h2>
            <button
              className="yes"
              onClick ={() => this.deleteUser(this.props.userId)}
              type="button">Yes, delete my account</button>
            <button className="no" type="button">
              <Link to="/home" style={{textDecoration:'none',color:'inherit',fontWeight:'unset'}}>No, take me back to Bestow</Link>
            </button>
      </div>
  )}
}

const mapStateToProps = state => ({
    users: state.users
});

export default connect(mapStateToProps, {deleteUser})(DeleteUser);
