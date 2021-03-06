import React, { Component } from 'react';
import {reduxForm, Field, focus, change, untouch} from 'redux-form';
import Input from './input';
import AddButton from './addButton';
import {required, valid} from '../validator';
import {connect} from 'react-redux';

import {addItem, getItems, getUserItems} from '../actions/actions';

import './addButton.css';
import './addItem.css';

class AddItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        editing: true,
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.setEditing = this.setEditing.bind(this);
}

setEditing(editing) {
    this.setState({
        editing
    });
}

onSubmit(e) {
    e.preventDefault();
    const who = this.whoInput.value.trim();
    const what = this.whatInput.value.trim();
    const when = this.whenInput.value;
    const userId = localStorage.localUserId;
    const hide  = true;
    const how = e.target.id;
    this.props.addItem({
      userId: userId,
      hide: hide,
      who: who,
      what: what,
      when: when,
      how: how
    });
    this.props.getItems();
   let resetInput = (formName, inputsObj) => {
          Object.keys(inputsObj).forEach(inputKey => {
              this.props.dispatch(change(formName, inputKey, inputsObj[inputKey]));
              this.props.dispatch(untouch(formName, inputKey));
          });
    }
    resetInput('addItem', {
    who: '',
    what: '',
    when: ''
});
    this.setEditing(!this.state.editing);
}


  render(props) {
    if (this.state.editing) {
      return (
        <form className="itemForm" aria-live="polite">
          <p className="close" onClick={this.props.onClick}>close</p>
          <Field
              name="what"
              type="text"
              component={Input}
              ariaLabel="what"
              display="whatIn itemIn"
              validate={[required, valid]}
              ref={input => this.whatInput = input}
          />
          <br />
          <Field
              name="who"
              type="text"
              component={Input}
              ariaLabel="who"
              display="whoIn itemIn"
              validate={[required, valid]}
              ref={input => this.whoInput = input}
          />
          <br />
          <Field
              name="when"
              type="date"
              component={Input}
              ariaLabel="when"
              display="whenIn itemIn"
              validate={[required, valid]}
              ref={input => this.whenInput = input}
          />
          <br />
            <button
              onClick={this.onSubmit}
              className="borrowBtn"
              id="borrowed"
              type="button">Borrowed</button>
            <button
              onClick={this.onSubmit}
              className="bestowBtn"
              id="bestowed"
              type="button">Bestowed</button>
        </form>
      );
  }
  return (
    <AddButton />
  )
}
}


const AddItemFormConnected = connect(null, {addItem, getUserItems, getItems})(AddItemForm)

export default reduxForm({
    form: 'addItem',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('addItem', Object.keys(errors)[0]))
})(AddItemFormConnected);
