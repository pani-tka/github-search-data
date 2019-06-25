import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {searchTextChanged, fetchOrganizations} from './actions';

class OrganizationSearch extends Component {
  onChange = event => {
    const organizationName = event.target.value;
    this.props.searchTextChanged(organizationName);
  };

  onClick = () => {
    this.props.fetchOrganizations();
  };

render() {
 const {organizationName} = this.props;
  console.log( this.props );
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
  
   <Link to="/organizations/1">Organization 1</Link>
   <Link to="/organizations/2">Organization 2</Link>
 </div>
 )
}
}

const mapStateToProps = state => ({
  organizations: state.organizations
})

const mapDispatchToProps = {
  searchTextChanged,
  fetchOrganizations,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizationSearch);

