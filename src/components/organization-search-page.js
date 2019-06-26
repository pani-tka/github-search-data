import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {searchTextChanged, fetchOrganizations} from '../actions';
import styles from './organization-search-page.module.scss';

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
        <div className={styles.container}>
          <div className={styles.searchContainer}>
          <div className={styles.header}>Organization search</div>
            <input
              className={styles.searchInput}
              type = "text"
              placehloder = "Type to search..."
              value = {queryText}
              onChange = {this.onChange}
            />
            <button
              className={styles.searchButton}
              type = "button"
              onClick = {this.onClick}
            >
              Search
            </button>
          </div>
          <div className={styles.ogranizationList}>
            {!!organizations &&
              organizations.map((item) => 
                <div className={styles.ogranizationItem} key={item.id}>
                  <img className={styles.organizationAvatar}
                    scr={item.avatar_url}
                    alt=""
                  >
                  </img>
                  <Link to={`/organizations/${item.login}`} className={styles.ogranizationName}>
                    {item.login}
                  </Link>
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

