import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContact = createAction("ADD_CONTACT", ({ name, number }) => ({
  payload: {
    contact: {
      id: uuidv4(),
      name,
      number,
    },
  },
}));

const deleteContact = createAction("DELETE_CONTACT");
const filterContacts = createAction("FILTER_CONTACTS");

export default {
  addContact,
  deleteContact,
  filterContacts,
};
