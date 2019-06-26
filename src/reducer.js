import {
  SEARCH_TEXT_CHANGED,
  FETCH_ORGANIZATIONS_SUCCESS,
  FETCH_MEMBERS_SUCCESS,
  FETCH_USER_SUCCESS
} from './actions';

const initialState = {
  queryText: '',
  organizations: [],
  members: [],
  user: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TEXT_CHANGED: {
      const nextState = {
        ...state,
        queryText: action.queryText
      };

      return nextState;
    }
    case FETCH_ORGANIZATIONS_SUCCESS: {
      const nextState = {
        ...state,
        organizations: action.organizations
      };

      return nextState;
    }
    case FETCH_MEMBERS_SUCCESS: {
      const nextState = {
        ...state,
        members: action.members
      };

      return nextState;
    }
    case FETCH_USER_SUCCESS: {
      const nextState = {
        ...state,
        user: action.user
      };

      return nextState;
    }
    default:
      return state;
  }
}