// Dependencies
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";
import * as $ from "jquery";
import Clipboard from "clipboard";

// CSS
import "normalize.css";
import "./Shared.css";

// Components
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer";
import ContactPreFooter from "./Components/ContactPreFooter";

// Views
import ServiceProvidersPage from "./Views/ServiceProviders";
import LandingPage from "./Views/Landing";
import NoMatch from "./Views/NoMatch";

// Images
import Logo from "./Images/Story_Logo.png";

new Clipboard(".copy--link");

const title = "Story Ventures";
const routes = [
  {
    title: "Story Ventures",
    path: "/",
    component: LandingPage,
    exact: true,
  },
  {
    title: "Story Ventures — Service Providers",
    path: "/Service_Providers",
    component: ServiceProvidersPage,
  },
];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page container-fluid">
          <Helmet titleTemplate={`%s - ${title}`} />
          <Helmet>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-EQGC6J42VV"
            ></script>
            <script>
              {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-EQGC6J42VV');`}
            </script>
          </Helmet>
          <NavBar logo={Logo} />
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
            <Route component={NoMatch} />
          </Switch>
          <ContactPreFooter />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
