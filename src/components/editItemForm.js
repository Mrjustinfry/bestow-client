import React, { Component } from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import {connect} from 'react-redux';

import Input from './input';
import {required, valid} from '../validator';
import {editItem, getItems} from '../actions/actions';

import './card.css';

class EditItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
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
      const when = this.whenInput.value.trim();
      const hide  = true;
      const how = e.target.id;
      this.props.editItem({
        cardId: this.props.theCardId,
        hide: hide,
        who: who,
        what: what,
        when: when,
        how: how
      });
      this.props.getItems();
      this.setEditing(!this.state.editing)
  }

  render() {
      return (
        <form className="editItemForm">
          <button
            style={{padding:'1%'}}
            onClick={this.onSubmit}
            className="borrowBtn"
            id="borrowed"
            value="borrowed"
            aria-label="borrowed"
            type="button">Borrowed</button>
          <button
            style={{padding:'1%'}}
            onClick={this.onSubmit}
            className="bestowBtn"
            id="bestowed"
            value="bestowed"
            aria-label="bestowed"
            type="button">Bestowed</button>
            <br />
          <Field
              name="what"
              type="text"
              component={Input}
              aria-label="What"
              display="whatIn editIn"
              placeholder={this.props.displayWhat}
              theCardId={this.props.theCardId}
              validate={[required, valid]}
              ref={input => (this.whatInput = input)}
          />
          <br />
          <Field
              name="who"
              type="text"
              component={Input}
              aria-label="Who"
              display="whoIn editIn"
              placeholder={this.props.displayWho}
              theCardId={this.props.theCardId}
              validate={[required, valid]}
              ref={input => (this.whoInput = input)}
          />
          <br />
          <Field
              name="when"
              type="date"
              component={Input}
              aria-label="When"
              display="whenIn editIn"
              placeholder={this.props.displayWhen}
              theCardId={this.props.theCardId}
              validate={[required, valid]}
              ref={input => (this.whenInput = input)}
          />
        </form>
      );
  }
}

EditItemForm.defaultProps = {
  editing: true
}

const mapStateToProps = state => ({
    items: state.bestow.items,
    searchCollection: state.bestow.searchCollection
});

const EditItemFormConnected = connect(mapStateToProps, {editItem, getItems})(EditItemForm)

export default reduxForm({
    form: 'editItem',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('editItem', Object.keys(errors)[0]))
})(EditItemFormConnected);
