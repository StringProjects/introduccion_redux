import { ADD_CONTACT, SEARCH } from '../constants';

const initialState = {
  list: [],
  search: ''
}

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT:
      return Object.assign({}, state, {
        list: state.list.concat([action.contact])
      });
    case SEARCH:
      return Object.assign({}, state, {
        search: action.text
      });
    default:
      return state;
  }
}
