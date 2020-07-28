import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import contactsActions from "../../modules/contacts/contactsActions";

import styles from "./Filter.module.css";

const Filter = ({ value, onChangeFilter }) => (
  <label className={styles.label}>
    Find contacts by name
    <input
      type="text"
      name="filter"
      value={value}
      onChange={(e) => onChangeFilter(e.target.value)}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};
Filter.defaulProps = {
  value: "",
};
const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
});
const mapDispatchToProps = {
  onChangeFilter: contactsActions.filterContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
