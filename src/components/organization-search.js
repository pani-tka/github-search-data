import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {searchTextChanged, fetchOrganizations, fetchMembers} from './actions';

class OrganizationSearch extends Component {
  onChange = event => {
    const organizationName = event.target.value;
    this.props.searchTextChanged(organizationName);
  };

  onClick = () => {
    this.props.fetchOrganizations();
    this.props.fetchMembers();
  };

  render() {
    const {organizationName, organizations } = this.props;
      
    return (
      <div>
        <div>Organization search</div>
        <div>
          <input
            type = "text"
            placehloder = "Type to search..."
            value = {organizationName}
            onChange = {this.onChange}
          />
          <button
            type = "button"
            onClick = {this.onClick}
          >
            Search
          </button>
        </div>
        <div>
          {!!organizations &&
            organizations.map((item) => 
              <div key={item.id}>
                <Link to={`/organizations/${item.login}`}>{item.login}</Link>
              </div>
            )
          }
        </div>
      </div>
    )
  }
  }

const mapStateToProps = state => ({
  organizations: state.organizations,
  members: state.members
})

const mapDispatchToProps = {
  searchTextChanged,
  fetchOrganizations,
  fetchMembers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizationSearch);

