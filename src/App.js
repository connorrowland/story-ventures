import React, { Component } from 'react';
import * as $ from 'jquery';
import './Shared.css';
import './Landing.css';
import NavBar from './Components/NavBar/NavBar';
import PortfolioItem from './Components/PortfolioItem/PortfolioItem';
import Logo from './Images/Story_Logo.png';
import SayspringLogo from './Images/sayspring.png';
import InfrastructureIllo from './Images/InfrastructureIllo.png';
import SensorySystemsIllo from './Images/SensorySystemsIllo.png';
import SoftwareIllo from './Images/SoftwareIllo.png';
import ScrollToAnchorLink from './Components/ScrollToAnchorLink';
import ContactForm from './Components/ContactForm';

class App extends Component {
  render() {
    return (
      <div className="App" id="landing-page">
        <NavBar
          currentPage="landing"
          logo={Logo}
        />
        <section id="landing--header">
          <div className="container">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="landing-header--inner">
                <h1 id="landing-header--future-heading">
                  The future of <br/>
                  <ScrollToAnchorLink
                    anchor="#landing--trio"
                    additionalClasses="link--blue landing-header--link"
                    innerLink="data automation"
                  /> is unwritten. 
                </h1>
                <h1>We back the <ScrollToAnchorLink
                    anchor="#landing--statement"
                    additionalClasses="link--blue landing-header--link"
                    innerLink="authors"
                  />
                  .
                </h1>
                <p className="landing-header--subtext">We launched Story to back entrepreneurs with big ideas that leverage the creation and proliferation of data. As first check investors, we emphasize people and vision over everything else. If you're passionate the world of data, we'd love to hear from you.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="landing--approach" className="thirds--section">
          <div className="thirds-section--inner" id="landing-approach--inner">
            <div id="approach--black-box" className="thirds-section--first"></div>
            <div className="thirds-section--second" id="approach--text">
              <h6 className="eyebrow thirds-section--eyebrow">HIGH-CONVICTION INVESTING</h6>
              <h4 className="thirds-section--heading">We support founders from the very beginning.</h4>
            </div>
          </div>
        </section>


        <section id="landing--trio">
          <div className="landing-trio--inner">
            <div className="landing-trio--item">
              <img src={InfrastructureIllo} alt="Story Illustration" className="landing-trio--illo"/>
              <h5 className="landing-trio--heading">Sensory Systems</h5>
              <p className="landing-trio--sub-heading">Systems that capture and understand real world data.</p>
              <div className="landing-trio--attributes">
                <h6 className="landing-trio-attributes--heading">INCLUDES</h6>
                <p className="landing-trio-attributes--subheading">Autonomous vehicles</p>
                <p className="landing-trio-attributes--subheading">Data capture</p>
                <p className="landing-trio-attributes--subheading">Robotics</p>
              </div>
            </div>
            <div className="section--divider"></div>
            <div className="landing-trio--item">
              <img src={SensorySystemsIllo} alt="Story Illustration" className="landing-trio--illo"/>
              <h5 className="landing-trio--heading">DATA INFRASTRUCTURE</h5>
              <p className="landing-trio--sub-heading">Systems that process, organize, and store data.</p>
              <div className="landing-trio--attributes">
                <h6 className="landing-trio-attributes--heading">INCLUDES</h6>
                <p className="landing-trio-attributes--subheading">Developer tools</p>
                <p className="landing-trio-attributes--subheading">Distributed cloud</p>
                <p className="landing-trio-attributes--subheading">Sensor fusion</p>
              </div>
            </div>
            <div className="section--divider"></div>
            <div className="landing-trio--item">
              <img src={SoftwareIllo} alt="Story Illustration" className="landing-trio--illo"/>
              <h5 className="landing-trio--heading">Intelligent Software</h5>
              <p className="landing-trio--sub-heading">Systems that utilize and apply intelligence to data.</p>
              <div className="landing-trio--attributes">
                <h6 className="landing-trio-attributes--heading">INCLUDES</h6>
                <p className="landing-trio-attributes--subheading">Computer vision</p>
                <p className="landing-trio-attributes--subheading">Machine learning</p>
                <p className="landing-trio-attributes--subheading">Natural language</p>
              </div>
            </div>
          </div>
        </section>
        <section id="landing--portfolio-grid">
          <div id="portfolio-grid--inner">
            <PortfolioItem
              logo={SayspringLogo}
              messageBanner={true}
              messageBannerText={"ACQUIRED BY ADOBE"}
            />
            <PortfolioItem
              logo={SayspringLogo}
            />
            <PortfolioItem
              logo={SayspringLogo}
            />
            <PortfolioItem
              logo={SayspringLogo}
            />
            <PortfolioItem
              logo={SayspringLogo}
            />
            <PortfolioItem
              logo={SayspringLogo}
            />
            <PortfolioItem
              logo={SayspringLogo}
            />
          </div>
        </section>

        <section id="landing--statement" className="thirds--section">
          <div className="thirds-section--inner">
            <div className="thirds-section--first" id="statement--gray-box">
              <img src={Logo} alt="Story Logo" className="landing-statement--logo"/>
            </div>
            <div className="thirds-section--second" id="statement--text">
              <h6 className="eyebrow thirds-section--eyebrow">HIGH-CONVICTION INVESTING</h6>
              <h4 className="statement-text--heading thirds-section--heading">We support founders from the very beginning.</h4>
            </div>
          </div>
        </section>

        <section id="landing--founders">
          <div id="founders--inner">
            <div className="founder-container">
              <h4 className="founder--name">Jake Yormak</h4>
              <p className="founder--bio">Focuses on the messy middle of making data usable, as well as the impact of design on human-technology interactions. Jake is a former lawyer who has shepherded countless technology companies from creation to scale, and works with the Story portfolio throughout the life-cycle.</p>
            </div>
            <div className="section--divider"></div>
            <div className="founder-container">
              <h4 className="founder--name">Brian Yormak</h4>
              <p className="founder--bio">Focuses on the integration of hardware and software, as well as new forms of data capture and processing. Brian specializes in mobility investing, with an interest in everything that touches logistics and the transportation of people and goods.</p>
            </div>
          </div>
        </section>

        <section id="signup--container">
          <div id="signup--intro-container">
            <h2>Let’s write the future together.</h2>
          </div>
          <ContactForm />
        </section>

        <section id="footer">
          <div className="flex--grid" id="footer--inner">
            <a href="mailto:helloworld@storyventures.com" id="footer--email">helloworld@storyventures.com</a>
            <h6 id="footer--copyright">Copyright © 2017 story ventures All Rights Reserved</h6>
          </div>
        </section>

      </div>
    );
  }
}

export default App;
