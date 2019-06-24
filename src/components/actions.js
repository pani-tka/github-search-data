export const SEARCH_TEXT_CHANGED = 'SEARCH_TEXT_CHANGED';
export const FETCH_ORGANIZATIONS_SUCCESS = 'FETCH_ORGANIZATIONS_SUCCESS';

export const searchTextChanged = organizationName => ({
  type: 'SEARCH_TEXT_CHANGED',
  organizationName
});

const fetchOrganizationsSuccess = data => ({
  type: 'FETCH_ORGANIZATIONS_SUCCESS',
  organizations: data
})

export const fetchOrganizations = () => (dispatch, getState) => {
  const {organizationName} = getState();

  fetch( `https://api.github.com/search/users?q=${organizationName}+type:Organization`)
      .then(response => response.json())
      .then(response => {
        dispatch(fetchOrganizationsSuccess(response))
      })
};
