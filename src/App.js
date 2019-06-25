import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import OrganizationSearch from './components/organization-search';
import OrganizationPage from './components/organization-page';
import UserPage from './components/user-page';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={OrganizationSearch} />
        <Route path="/organizations/:organizationId" component={OrganizationPage} />
        <Route path="/users/:userId" component={UserPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
