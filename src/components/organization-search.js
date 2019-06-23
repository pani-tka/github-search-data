import React from 'react';
import {Link} from 'react-router-dom';

export const OrganizationSearch = () =>(
  
  <div>
    <div>Organization search</div>
    <div>
      <input placehloder="Type to search..." />
    </div>
    <Link to="/organizations/1">Organization 1</Link>
    <Link to="/organizations/2">Organization 2</Link>
  </div>
);
