// Dependencies
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet';
import * as $ from 'jquery';

// CSS
import 'normalize.css';
import './Shared.css';

// Components
import NavBar from './Components/NavBar/NavBar';
import PortfolioItem from './Components/PortfolioItem/PortfolioItem';
import ScrollToAnchorLink from './Components/ScrollToAnchorLink';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer.js';

// Views
import ServiceProvidersPage from './Views/ServiceProviders';
import LandingPage from './Views/Landing';
import NoMatch from './Views/NoMatch';

// Images
import Logo from './Images/Story_Logo.png';

const title = 'Story Ventures';
const routes = [
  {
    title: 'Story Ventures',
    path: '/',
    component: LandingPage,
    exact: true
  }, {
    title: 'Story Ventures — Service Providers',
    path: '/Service_Providers',
    component: ServiceProvidersPage
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page">
          <Helmet titleTemplate={`%s - ${title}`} />
          <NavBar
            currentPage="landing"
            logo={Logo}
          />
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
