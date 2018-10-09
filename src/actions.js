import { ADD_CONTACT, SEARCH } from './constants';

export function addContact(contact) {
  return {
    type: ADD_CONTACT,
    contact,
  };
}

export function search(text) {
  return {
    type: SEARCH,
    text
  }
}
