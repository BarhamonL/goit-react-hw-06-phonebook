import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import contactsActions from "../../modules/contacts/contactsActions";

import showToastError from "../../utils/showToastError";
import showToastSuccess from "../../utils/showToastSuccess";

import styles from "./ContactEditor.module.css";

class ContactEditor extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const alreadyRecordedContact = this.props.contacts.some(
      (contact) => contact.name === name
    );

    if (!name || !number) {
      return showToastError("All required fields are not filled");
    } else if (alreadyRecordedContact) {
      showToastError(`${name} is already in contacts`);
    } else {
      this.props.onAdd(this.state);
      showToastSuccess(`${name} added to contacts`);
    }

    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            placeholder="*Enter contacts name"
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          Number
          <input
            type="text"
            name="number"
            value={number}
            placeholder="*Enter contacts number"
            onChange={this.handleChange}
          ></input>
        </label>

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  const contacts = state.contacts.items;
  return { contacts };
};
const mapDispatchToProps = {
  onAdd: contactsActions.addContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactEditor);
