import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

class UserPage extends Component {

  componentDidMount () {
    this.props.fetchUser(this.props.match.params.userName);
  };

  render () {
    const {user} = this.props;
    
      return (
        <div>
          <div>User {this.props.match.params.userName}</div>
          <div>
            <img src={user.avatar_url} alt=""></img>
            <a href={user.html_url}>{user.login}</a>
            <p>{user.name}</p>
            <p>{user.bio}</p>
            <p>{user.location}</p>
            <p>{user.email}</p>
          </div>
        </div>
      )
  }
}
const mapStateToProps = state => ({
  members: state.members,
  user: state.user
})

const mapDispatchToProps = {
  fetchUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);