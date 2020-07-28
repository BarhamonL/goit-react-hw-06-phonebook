import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import contactsActions from "../../modules/contacts/contactsActions";

import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onClose }) => (
  <ul className={styles.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>{name}: </p>
        <span> {number}</span>

        <button className={styles.delete} onClick={() => onClose(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const normalisedFilter = filter.toLowerCase();
  const visibleContacts = items.filter(({ name }) =>
    name.toLowerCase().includes(normalisedFilter)
  );

  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = {
  onClose: contactsActions.deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
