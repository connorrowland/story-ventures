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

import ApplePieLogo from './Images/ApplePieLogo.png';
import ExplorerLogo from './Images/ExplorerLogo.png';
import FreightLogo from './Images/FreightLogo.png';
import JIKOLogo from './Images/JIKOLogo.png';
import MotorqLogo from './Images/MotorqLogo.png';
import MuseLogo from './Images/MuseLogo.png';
import NanitLogo from './Images/NanitLogo.png';
import NemedioLogo from './Images/NemedioLogo.png';
import NewtonLogo from './Images/NewtonLogo.png';
import OOVALogo from './Images/OOVALogo.png';
import PetalLogo from './Images/PetalLogo.png';
import PinnLogo from './Images/PinnLogo.png';
import SmileLogo from './Images/SmileLogo.png';
import StaeLogo from './Images/StaeLogo.png';
import SummerLogo from './Images/SummerLogo.png';
import WeelLogo from './Images/WeelLogo.png';
import WTCLogo from './Images/WTC_Logo.png';

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
                    anchor="#landing--portfolio-grid"
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
              <h6 className="eyebrow thirds-section--eyebrow">A full-stack approach</h6>
              <h4 className="thirds-section--heading">We invest in the building blocks of automated systems.</h4>
            </div>
          </div>
        </section>


        <section id="landing--trio">
          <div className="landing-trio--inner">
            <div className="landing-trio--item">
              <div className="landing-trio--illo-container">
                <img src={InfrastructureIllo} alt="Story Illustration" className="landing-trio--illo"/>
              </div>
              <h5 className="landing-trio--heading">Sensory Systems</h5>
              <p className="landing-trio--sub-heading">Systems that capture and understand real world data.</p>
              <div className="landing-trio--attributes">
                <h6 className="landing-trio-attributes--heading">INCLUDES</h6>
                <p className="landing-trio-attributes--subheading">Autonomous vehicles <br className="hide-for-mobile"/><span className="show-for-mobile">,</span> Data capture <br className="hide-for-mobile"/><span className="show-for-mobile">,</span> Robotics </p>
              </div>
            </div>
            <div className="section--divider"></div>
            <div className="landing-trio--item">
              <div className="landing-trio--illo-container">
                <img src={SensorySystemsIllo} alt="Story Illustration" className="landing-trio--illo"/>
              </div>
              <h5 className="landing-trio--heading">DATA INFRASTRUCTURE</h5>
              <p className="landing-trio--sub-heading">Systems that process, organize, and store data.</p>
              <div className="landing-trio--attributes">
                <h6 className="landing-trio-attributes--heading">INCLUDES</h6>
                <p className="landing-trio-attributes--subheading">Developer tools <br className="hide-for-mobile"/><span className="show-for-mobile">,</span> Distributed cloud <br className="hide-for-mobile"/><span className="show-for-mobile">,</span> Sensor fusion</p>
              </div>
            </div>
            <div className="section--divider"></div>
            <div className="landing-trio--item">
              <div className="landing-trio--illo-container">
                <img src={SoftwareIllo} alt="Story Illustration" className="landing-trio--illo"/>
              </div>
              <h5 className="landing-trio--heading">Intelligent Software</h5>
              <p className="landing-trio--sub-heading">Systems that utilize and apply intelligence to data.</p>
              <div className="landing-trio--attributes">
                <h6 className="landing-trio-attributes--heading">INCLUDES</h6>
                <p className="landing-trio-attributes--subheading">Computer vision <br className="hide-for-mobile"/><span className="show-for-mobile">,</span> Machine learning <br className="hide-for-mobile"/><span className="show-for-mobile">,</span> Natural language </p>
              </div>
            </div>
          </div>
        </section>
        <section id="landing--portfolio-grid">
          <div id="portfolio-grid--inner">
            <PortfolioItem
              logo={SayspringLogo}
              companyName="Sayspring"
              companyBio="Empowering designers to create voice-enabled applications without code."
              link="http://sayspring.com"
              messageBanner={true}
              messageBannerText={"ACQUIRED BY ADOBE"}
            />
            <PortfolioItem
              logo={PetalLogo}
              companyName="Petal"
              companyBio="Increasing access to credit cards through cash flow underwriting."
              link="http://petalcard.com"
            />
            <PortfolioItem
              logo={ExplorerLogo}
              companyName="Explorer"
              companyBio="Enabling autonomous vehicles to operate at scale."
              link="http://explorer.ai"
            />
            <PortfolioItem
              logo={MuseLogo}
              companyName="Muse"
              companyBio="Leveraging machine learning to make video searchable."
              link="http://muse.ai"
            />
            <PortfolioItem
              logo={StaeLogo}
              companyName="Stae"
              companyBio="Providing the infrastructure to understand and utilize urban data."
              link="http://stae.co"
            />
            <PortfolioItem
              logo={FreightLogo}
              companyName="Freightwaves"
              companyBio="Building information and financial tools to inform trucking and freight companies."
              link="http://freightwaves.com"
            />
            <PortfolioItem
              logo={JIKOLogo}
              companyName="Jiko"
              companyBio="Launching a new category of consumer bank to safeguard money and data."
              link="http://jiko.io"
            />
            <PortfolioItem
              logo={NewtonLogo}
              companyName="NewtonX"
              companyBio="Building an AI-powered network to connect professionals with experts."
              link="http://newtonx.com"
            />
            <PortfolioItem
              logo={PinnLogo}
              companyName="Pinn"
              companyBio="Utilizing behavioral biometrics to verify a person's identity."
              link="https://pinn.ai/"
            />
            <PortfolioItem
              logo={MotorqLogo}
              companyName="Motorq"
              companyBio="Managing data and APIs for connected vehicles."
              link="http://motorq.co"
            />
            <PortfolioItem
              logo={WTCLogo}
              companyName="WaystoCap"
              companyBio="Building an efficient and transparent b2b marketplace in Africa."
              link="http://waystocap.com/en"
            />
            <PortfolioItem
              logo={SummerLogo}
              companyName="Summer"
              companyBio="Helping students and alumni navigate the student loan burden."
              link="http://meetsummer.org"
            />
            <PortfolioItem
              logo={ApplePieLogo}
              companyName="Apple Pie Capital"
              companyBio="Creating a frictionless bridge between lenders and franchisees."
              link="http://applepiecapital.com"
            />
            <PortfolioItem
              logo={SmileLogo}
              companyName="Smile Identity"
              companyBio="Onboarding and authenticating identities through facial recognition."
              link="http://smileidentity.com"
            />
            <PortfolioItem
              logo={NanitLogo}
              companyName="Nanit"
              companyBio="Leveraging computer vision to provide parents with valuable insights about their babies."
              link="http://nanit.com"
            />
            <PortfolioItem
              logo={NemedioLogo}
              companyName="neMEDIO"
              companyBio="Building tooling to speed up high-tech medical device development."
              link="http://nemedio.com/"
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