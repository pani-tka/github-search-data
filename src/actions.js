export const SEARCH_TEXT_CHANGED = 'SEARCH_TEXT_CHANGED';
export const FETCH_ORGANIZATIONS_SUCCESS = 'FETCH_ORGANIZATIONS_SUCCESS';
export const FETCH_MEMBERS_SUCCESS = 'FETCH_MEMBERS_SUCCESS';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

export const searchTextChanged = queryText => ({
  type: 'SEARCH_TEXT_CHANGED',
  queryText
});

const fetchOrganizationsSuccess = data => ({
  type: 'FETCH_ORGANIZATIONS_SUCCESS',
  organizations: data.items
});

export const fetchOrganizations = () => (dispatch, getState) => {
  const {queryText} = getState();

  fetch( `https://api.github.com/search/users?q=${queryText}+type:Organization`)
      .then(response => response.json())
      .then(response => {
        dispatch(fetchOrganizationsSuccess(response))
      })
};

const fetchMembersSuccess = members => ({
  type: 'FETCH_MEMBERS_SUCCESS',
  members: members
});

export const fetchMembers = (organizationName) => (dispatch) => {

  fetch( `https://api.github.com/orgs/${organizationName}/members`)
      .then(response => response.json())
      .then(response => {
        dispatch(fetchMembersSuccess(response))
      })
};

const fetchUserSuccess = user => ({
  type: 'FETCH_USER_SUCCESS',
  user: user
});

export const fetchUser = (userName) => (dispatch) => {

  fetch( `https://api.github.com/users/${userName}`)
      .then(response => response.json())
      .then(response => {
        dispatch(fetchUserSuccess(response))
      })
};

