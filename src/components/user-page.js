import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchUser} from '../actions';
import styles from './user-page.module.scss';

class UserPage extends Component {

  componentDidMount () {
    this.props.fetchUser(this.props.match.params.userName);
  };

  render () {
    const {user} = this.props;

      return (
        <div className={styles.container}>
          <div className={styles.userHeader}>User {this.props.match.params.userName}</div>
          <div className={styles.userCard}>
            <img className={styles.userAvatar} src={user.avatar_url} alt=""></img>
            <a className={styles.userLogin} href={user.html_url}>{user.login}</a>
            <div className={styles.userName}>{user.name}</div>
            <div className={styles.userBio}>{user.bio}</div>
            <div className={styles.userLocation}>
              {user.location}
            </div>
            <div className={styles.userEmail}>{user.email}</div>
          </div>
          <Link to='/' className={styles.returnLink}> 
            Return to search page 
          </Link>
        </div>
      )
  }
}
const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = {
  fetchUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);