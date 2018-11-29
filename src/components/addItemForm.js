import React, { Component } from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import {required, valid} from '../validator';

import './addButton.css';
import './addItem.css';

class AddItemForm extends Component {
  constructor(props) {
    super(props);
}

  render() {
      return (
        <form className="itemForm">
          <p className="close" onClick={this.props.onClick}>close</p>
          <Field
              name="what"
              type="text"
              component={Input}
              ariaLabel="what"
              display="whatIn itemIn"
              validate={[required, valid]}
          />
          <br />
          <Field
              name="who"
              type="text"
              component={Input}
              ariaLabel="who"
              display="whoIn itemIn"
              validate={[required, valid]}
          />
          <br />
          <Field
              name="when"
              type="date"
              component={Input}
              ariaLabel="when"
              display="whenIn itemIn"
              validate={[required, valid]}
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
}

export default reduxForm({
    form: 'addItem',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('addItem', Object.keys(errors)[0]))
})(AddItemForm);
