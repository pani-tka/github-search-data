import React from 'react';

export const UserView = props => (
  <div>
    <div>User {props.match.params.userId}</div>
    <div>Here would be user info</div>
  </div>
);