import React from 'react';
import {Link} from 'react-router-dom';

export const OrganizationPage = props => (
  <div>
    <div>Organization {props.match.params.organizationId}</div>
    <Link to="/users/1">Organization member 1</Link>
    <Link to="/users/2">Organization member 2</Link>
  </div>
);