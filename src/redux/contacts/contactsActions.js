import contactsTypes from "./contactsTypes";
import { v4 as uuidv4 } from "uuid";

const addContact = (contact) => {
  const { name, number } = contact;
  return {
    type: contactsTypes.ADD_CONTACT,
    payload: {
      contact: {
        id: uuidv4(),
        name,
        number,
      },
    },
  };
};

const deleteContact = (contactId) => ({
  type: contactsTypes.DELETE_CONTACT,
  payload: contactId,
});

const filterContacts = (filter) => {
  return {
    type: contactsTypes.FILTER_CONTACTS,
    payload: {
      filter,
    },
  };
};

export default {
  addContact,
  deleteContact,
  filterContacts,
};
