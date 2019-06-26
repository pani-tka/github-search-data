import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {searchTextChanged, fetchOrganizations} from '../actions';

class OrganizationSearchPage extends Component {

  onChange = event => {
    const queryText = event.target.value;
    this.props.searchTextChanged(queryText);
  };

  onClick = () => {
    this.props.fetchOrganizations();
  };

  render() {
    const {queryText, organizations } = this.props;

      return (
        <div>
          <div>Organization search</div>
          <div>
            <input
              type = "text"
              placehloder = "Type to search..."
              value = {queryText}
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
})

const mapDispatchToProps = {
  searchTextChanged,
  fetchOrganizations,
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizationSearchPage);

