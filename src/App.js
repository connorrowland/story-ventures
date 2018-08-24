import React, { Component } from 'react';
import './Shared.css';
import './Landing.css';
import NavBar from './Components/NavBar/NavBar';
import PortfolioItem from './Components/PortfolioItem/PortfolioItem';
import Logo from './Images/Story_Logo.png';
import SayspringLogo from './Images/sayspring.png';
import InfrastructureIllo from './Images/InfrastructureIllo.png';
import SensorySystemsIllo from './Images/SensorySystemsIllo.png';
import SoftwareIllo from './Images/SoftwareIllo.png';

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
                <h1 id="landing-header--future-heading">The future of <br/><span className="link--blue landing-header--link">data automation</span> a unwritten. </h1>
                <h1>We back the <span className="link--blue landing-header--link">authors</span>.</h1>
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
            <div className="landing-trio--divider"></div>
            <div className="landing-trio--item">
              <img src={SensorySystemsIllo} alt="Story Illustration" className="landing-trio--illo"/>
              <h5 className="landing-trio--heading">Sensory Systems</h5>
              <p className="landing-trio--sub-heading">Systems that process, organize, and store data.</p>
              <div className="landing-trio--attributes">
                <h6 className="landing-trio-attributes--heading">INCLUDES</h6>
                <p className="landing-trio-attributes--subheading">Developer tools</p>
                <p className="landing-trio-attributes--subheading">Distributed cloud</p>
                <p className="landing-trio-attributes--subheading">Sensor fusion</p>
              </div>
            </div>
            <div className="landing-trio--divider"></div>
            <div className="landing-trio--item">
              <img src={SoftwareIllo} alt="Story Illustration" className="landing-trio--illo"/>
              <h5 className="landing-trio--heading">Sensory Systems</h5>
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
      </div>
    );
  }
}

export default App;
