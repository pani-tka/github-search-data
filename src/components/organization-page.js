import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchMembers, fetchUser} from './actions';

class OrganizationPage extends Component {

  componentDidMount () {
    this.props.fetchMembers(this.props.match.params.organizationId);
  }

  render(){
    const {members} = this.props;
    
      return (
        <div>
          <div>Organization {this.props.match.params.organizationId}</div>
          <div>
            {!!members &&
              members.map((member) => 
                <div key={member.id}>
                  <Link to={`/users/${member.login}`}>
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
  

