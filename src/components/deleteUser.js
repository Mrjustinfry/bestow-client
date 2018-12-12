import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';

import {deleteUser} from '../actions/actions';

import './deleteUser.css';

export class DeleteUser extends Component {

  deleteTheUser(props) {
    this.props.deleteUser(localStorage.localUserId);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className='deleteBox'>
        <h1 className="youSure">Are you sure you want to delete your account?</h1>
          <h2 className="permanent">This cannot be undone</h2>
            <button
              className="yes"
              onClick ={() => this.deleteTheUser()}
              type="button">Yes, delete my account</button>
            <button className="no" type="button">
              <Link to="/home" style={{textDecoration:'none',color:'inherit',fontWeight:'unset'}}>No, take me back to Bestow</Link>
            </button>
      </div>
  )}
}

const mapStateToProps = state => ({
    theUser: state.bestow.theUser
});

export default withRouter(connect(mapStateToProps, {deleteUser})(DeleteUser));
