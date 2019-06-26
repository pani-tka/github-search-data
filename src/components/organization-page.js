import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchMembers, fetchUser} from '../actions';
import styles from './organization-page.module.scss';

class OrganizationPage extends Component {

  componentDidMount() {
    this.props.fetchMembers(this.props.match.params.organizationName);
  }

  render() {
    const {members} = this.props;
    
      return (
        <div className={styles.container}>
          <div className={styles.memberHeader}>
            Organization {this.props.match.params.organizationName} 
          </div>
          <Link to='/' className={styles.returnLink}> 
            Return to search page 
          </Link>
          <div className={styles.memberList}>
            {!!members &&
              members.map((member) => 
                <div className={styles.memberItem} key={member.id}>
                  <img className={styles.organizationAvatar}
                    scr={member.avatar_url}
                    alt=""
                  >
                  </img>
                  <Link to={`/users/${member.login}`} className={styles.memberName}>
                    {member.login}
                  </Link>
                </div>
              )
            }
          </div>
        </div> 
      )
  }
};

const mapStateToProps = state => ({
  members: state.members,
  user: state.user
})

const mapDispatchToProps = {
  fetchMembers,
  fetchUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizationPage);
  

