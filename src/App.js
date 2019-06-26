import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import OrganizationSearchPage from './components/organization-search-page';
import OrganizationPage from './components/organization-page';
import UserPage from './components/user-page';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={OrganizationSearchPage} />
        <Route path="/organizations/:organizationName" component={OrganizationPage} />
        <Route path="/users/:userName" component={UserPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
