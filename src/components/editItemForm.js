import React, { Component } from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';

import Input from './input';
import {required, valid} from '../validator';

import './card.css';

class EditItemForm extends Component {
  render() {
      return (
        <form className="editItemForm">
          <button
            style={{padding:'1%'}}
            onClick={this.onSubmit}
            className="borrowBtn"
            id="borrowed"
            value="borrowed"
            type="button">Borrowed</button>
          <button
            style={{padding:'1%'}}
            onClick={this.onSubmit}
            className="bestowBtn"
            id="bestowed"
            value="bestowed"
            type="button">Bestowed</button>
            <br />
          <Field
              name="what"
              type="text"
              component={Input}
              ariaLabel="What"
              display="whatIn editIn"
              placeholder={this.props.what}
              validate={[required, valid]}
          />
          <br />
          <Field
              name="who"
              type="text"
              component={Input}
              ariaLabel="Who"
              display="whoIn editIn"
              placeholder={this.props.who}
              validate={[required, valid]}
          />
          <br />
          <Field
              name="when"
              type="date"
              component={Input}
              AriaLabel="When"
              display="whenIn editIn"
              placeholder={this.props.when}
              validate={[required, valid]}
          />
        </form>
      );
  }
}

export default reduxForm({
    form: 'editItem',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('editItem', Object.keys(errors)[0]))
})(EditItemForm);
