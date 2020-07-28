import { combineReducers } from "redux";
import contactsTypes from "./contactsTypes";
import showToastSuccess from "../../utils/showToastSuccess";

const initialState = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  },
};

const items = (state = initialState.contacts.items, { type, payload }) => {
  switch (type) {
    case contactsTypes.ADD_CONTACT:
      return [...state, payload.contact];
    case contactsTypes.DELETE_CONTACT:
      return state.filter((contact) => {
        if (contact.id === payload) {
          showToastSuccess(
            `${contact.name} was successfully removed from contacts`
          );
        }
        return contact.id !== payload;
      });

    default:
      return state;
  }
};

const filter = (state = initialState.contacts.filter, { type, payload }) => {
  switch (type) {
    case contactsTypes.FILTER_CONTACTS:
      return payload.filter;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
