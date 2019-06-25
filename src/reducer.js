import {
  SEARCH_TEXT_CHANGED,
  FETCH_ORGANIZATIONS_SUCCESS,
  FETCH_MEMBERS_SUCCESS
} from './components/actions';

const initialState = {
  organizationName : '',
  organizations: [],
  members: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TEXT_CHANGED: {
      const nextState = {
        ...state,
        organizationName: action.organizationName
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
    default:
      return state;
  }
}