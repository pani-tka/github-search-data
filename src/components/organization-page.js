import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchMembers} from './actions';

class OrganizationPage extends Component {

  render(){
    const {members} = this.props;

      return (
        <div>
          <div>Organization {this.props.match.params.organizationId}</div>
          <div>
            {!!members &&
              members.map((member) => 
                <div key={member.id}>
                  <Link to={`/users/${member.login}`}>{member.login}</Link>
                </div>
              )
            }
          </div>
        </div> 
      )
  }
};

const mapStateToProps = state => ({
  members: state.members
})

const mapDispatchToProps = {
  fetchMembers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizationPage);
  

