// Dependencies
import React, { Component } from 'react';
import * as $ from 'jquery';

// Components
import ScrollToAnchorLink from './ScrollToAnchorLink';
import PasswordForm from './PasswordForm';

const sections = [
  {
    title: 'Legal Services',
    linkText: 'Legal Services',
    id: "legal",
    description: 'Company formation, Corporate governance, Employee matters, Contract negotiations, Financings, and other legal matters',
    providerSections: [
      {
        title: "Big Law",
        className: "provider-section--lg",
        companies: [
          {
            id: "10",
            name: "Gunderson Dettmer",
            contact: "Ward Breeze",
            offices: "National",
            email: "wbreeze@gunder.com",
            hq: "NYC & SF"
          },
          {
            id: "11",
            name: "Orrick",
            contact: "David Gold",
            offices: "National",
            email: "dgold@orrick.com",
            hq: "NYC & SF"
          },
          {
            id: "12",
            name: "Cooley",
            contact: "Ali Haggerty",
            offices: "National",
            email: "ahaggerty@cooley.com",
            hq: "NYC & SF"
          }
        ]
      },
      {
        title: "Boutique Law",
        className: "provider-section--lg",
        companies: [
          {
            id: "20",
            name: "Gray Legal",
            contact: "Len Gray",
            offices: "NYC & Cleveland",
            email: "len@gray.legal"
          },
          {
            id: "21",
            name: "Potomac Law Group",
            contact: "Catherine Guttman-McCabe",
            offices: "NYC, Boston, D.C.",
            email: "cguttman-mccabe@potomaclaw.com"
          },
          {
            id: "22",
            name: "Christine Chang P.C.",
            contact: "Christine Chang",
            offices: "NYC, Boston, D.C.",
            email: "christine@ccventurelaw.com"
          }
        ]
      },
      {
        title: "IP Law (e.g. Patents and Trademarks)",
        className: "provider-section--lg",
        companies: [
          {
            id: "30",
            name: "Fish & Richardson",
            contact: "Chris Bowley",
            offices: "National",
            email: "bowley@fr.com",
            hq: "NYC & SF"
          }
        ]
      },
      {
        title: "IP Strategy Consultants",
        className: "provider-section--lg",
        companies: [
          {
            id: "40",
            name: "IP Capital Group",
            contact: "John Cronin",
            offices: "Vermont",
            email: "jcronin@ipcg.com"
          },
          {
            id: "41",
            name: "Gunderson Dettmer",
            contact: "Robert Barr",
            offices: "National",
            email: "rbarr@gunder.com",
            hq: "NYC & SF"
          }
        ]
      },
      {
        title: "Real Estate Law",
        className: "provider-section--lg",
        companies: [
          {
            id: "42",
            name: "Valence Law",
            contact: "Krista Kim",
            offices: "SF",
            email: "krista@valencelaw.com"
          }
        ]
      }
    ]
  },
  {
    title: 'Back Office',
    linkText: 'Back Office',
    id: "back-office",
    description: 'Outsourced accounting,  CFO and tax services, Cap table and human capital management',
    providerSections: [
      {
        title: "Full-stack Financial Support",
        className: "provider-section--lg",
        companies: [
          {
            id: "50",
            name: "Wiss & Company",
            contact: "Matt Barbieri",
            offices: "NYC & NJ",
            email: "mbarbieri@wiss.com"
          },
          {
            id: "51",
            name: "Early Growth Financial Services",
            contact: "Tim Malloy",
            offices: "NYC, SF, LA, Chicago & Seattle",
            email: "tmalloy@earlygrowthfinancialservices.com"
          },
          {
            id: "52",
            name: "Nomad Financial",
            contact: "Nick Dolik",
            offices: "NYC",
            email: "n.dolik@nomadfinancial.com"
          }
        ]
      },
      {
        title: "Cap Table Management",
        className: "provider-section--lg",
        companies: [
          {
            id: "60",
            name: "Carta",
            contact: "Kelley Oreglia",
            offices: "National",
            email: "kelley.oreglia@esharesinc.com",
            hq: "SF"
          }
        ]
      },
      {
        title: "Payroll, Benefits, & Compliance",
        className: "provider-section--lg",
        companies: [
          {
            id: "61",
            name: "Gusto",
            contact: "MT Joyce",
            offices: "National",
            email: "mt@gusto.com",
            hq: "SF"
          }
        ]
      }
    ]
  },
  {
    title: 'Banking',
    linkText: 'Banking',
    id: "banking",
    description: 'Online banking, Cash management, Advisory services, Employee banking services, and wealth management',
    providerSections: [
      {
        title: "Capital Services",
        className: "provider-section--lg",
        companies: [
          {
            id: "70",
            name: "First Republic Bank",
            contact: "Donna Karraz",
            offices: "National",
            email: "dkarraz@firstrepublic.com"
          },
          {
            id: "71",
            name: "Silicon Valley Bank",
            contact: "Adam Millsom",
            offices: "National",
            email: "amillsom@svb.com"
          },
          {
            id: "72",
            name: "Square 1 Bank",
            contact: "Svetlana Lebedeva",
            offices: "National",
            email: "slebedeva@square1bank.com"
          }
        ]
      }
    ]
  },
  {
    title: 'Brand Design',
    linkText: 'Creative Services',
    id: "brand-design",
    description: 'Content creation, Brand strategy, Digital (Webite / Mobile) design, UI and UX design, Digital marketing',
    providerSections: [
      {
        title: "Full Service Agencies",
        className: "provider-section--lg",
        companies: [
          {
            id: "80",
            name: "Alden Wolf",
            contact: "Scott Alden",
            email: "hello@aldenwolf.com",
            differentiation: "Ideal client startup raising 1st round",
            pricing: "Starts at $30-$40k (full services)",
            clients: "Rhino, Knaq"
          },
          {
            id: "81",
            name: "Red Antler",
            contact: "Kyle Marzonie",
            email: "kyle.maronie@redantler.com",
            differentiation: "Focus on early stage (80% startups); Known for packaging/unboxing (industrial design)",
            pricing: "Starts @ $150k for early stage startups",
            clients: "Casper, Betterment, C by GE, Brandless"
          },
          {
            id: "82",
            name: "Derris",
            contact: "Alli Stanca",
            email: "alli@derris.com",
            differentiation: "Storytelling focus, DTC, complex industries",
            pricing: "Monthly PR retainers start @ $15k",
            clients: "Harry's, Warby Parker, Jopwell, Walmart"
          },
          {
            id: "83",
            name: "BigEyedWish",
            contact: "Ian Wishingrad",
            email: "ian@bigeyedwish.com",
            differentiation: "Sharp creative engages the consumer",
            pricing: "Starts @ $10k",
            clients: "Dos Toros, AT&T, Nike, Nestle, Diageo"
          }
        ]
      },
      {
        title: "Product Design",
        className: "provider-section--lg",
        companies: [
          {
            id: "90",
            name: "Big Human",
            contact: "Andrew Tejerina",
            email: "andrew@bighuman.com",
            differentiation: "Create big ideas (HQ); Help fundraise",
            pricing: "Starts @ $20k (1 resource for 1 week = $8k)",
            clients: "Flatiron School, Vine, Google, HQ, Squarespace"
          },
          {
            id: "91",
            name: "Studio Simpatico",
            contact: "Tamara Olson",
            email: "tamara@studiosimpati.co",
            differentiation: "WordPress development & UX/UI strengths",
            pricing: "Projects start @ $15k",
            clients: "3D Robotics, Orchard Platform, NaNoWriMo"
          },
          {
            id: "92",
            name: "Derris",
            contact: "Alli Stanca",
            email: "alli@derris.com",
            differentiation: "Storytelling focus, DTC, complex industries",
            pricing: "Monthly PR retainers start @ $15k",
            clients: "Harry's, Warby Parker, Jopwell, Walmart"
          },
          {
            id: "93",
            name: "BigEyedWish",
            contact: "Ian Wishingrad",
            email: "ian@bigeyedwish.com",
            differentiation: "Sharp creative engages the consumer",
            pricing: "Starts @ $10k",
            clients: "Dos Toros, AT&T, Nike, Nestle, Diageo"
          }
        ]
      }
    ]
  },
  {
    title: 'Brand Communications',
    linkText: 'Brand Communications',
    id: "brand-communications",
    description: 'Media relations, Strategic communications, Content marketing and strategy',
    providerSections: [
      {
        title: "Strategic Branding",
        className: "provider-section--md",
        companies: [
          {
            id: "100",
            name: "Main & Rose",
            contact: "David Helfenbein",
            email: "david@main-rose.com",
            differentiation: "Strategic branding & assessment",
            pricing: "Starts @ $3500/mth. (2 mths.)",
            clients: "Google, TED, YouTube, Forbes, Vice"
          }
        ]
      },
      {
        title: "Content Marketing / Strategy",
        className: "provider-section--md",
        companies: [
          {
            id: "110",
            name: "Lighthouse",
            contact: "John Hazard",
            email: "john@lhchq.com",
            differentiation: "Understands B2B/tech startups & content creation experience (founders Contently alums)",
            pricing: "$4-$5k per month; a-la-carte services $200/hr.",
            clients: "Contently, Facebook, Walmart, Amex, TheMuse"
          }
        ]
      },
      {
        title: "Social Media Optimization",
        className: "provider-section--md",
        companies: [
          {
            id: "120",
            name: "Trapica",
            contact: "Mike Teitelman",
            email: "mike@trapica.com",
            differentiation: "Reduce social media marketing costs by 20-25%, utilizing artificial intelligence and real time optimization",
            pricing: "Starting @ $1349/mo",
            clients: "Ebay, UNIQLO, Dirty Lemon"
          }
        ]
      },
      {
        title: "Public Relations",
        className: "provider-section--lg",
        companies: [
          {
            id: "130",
            name: "Airlink Marketing",
            contact: "Ariana O'Dell",
            email: "arianna@airlinkusa.com",
            differentiation: "Work w/ many tech companies; blockchain focus; design arm & content marketing",
            pricing: "Starts @ $5k",
            clients: "Restart Energy, Roomi, Sense360, Gatorade, Vistaprint"
          },
          {
            id: "131",
            name: "Marissa Arnold",
            contact: "Marissa Arnold",
            email: "arnold.marissa@gmail.com",
            differentiation: "Tech PR; focus: B2B tech & finance",
            pricing: "Monthly retainer avg. $6-9k/month or $200-250/hr",
            clients: "General Assembly (in house); AR ad-tech startup, a data-insights platform & global blockchain company"
          }
        ]
      }
    ]
  },
  {
    title: 'Real Estate Brokerage',
    linkText: 'Real Estate Brokerage',
    id: "real-estate",
    description: 'Properity leasing opportunities, Sub-leases and lease termination',
    providerSections: [
      {
        title: "Leasing Services",
        className: "provider-section--lg",
        companies: [
          {
            id: "140",
            name: "Handler Real Estate",
            contact: "Helen Kim",
            email: "hkim@handler-re.com",
            differentiation: "Co-working leases",
            office: "NYC"
          },
          {
            id: "141",
            name: "Tungsten Property",
            contact: "Lydia Bell",
            email: "lydia@tungstenproperty.com",
            differentiation: "Design-focused commercial leases",
            office: "NYC"
          }
        ]
      }
    ]
  }
]

class ServiceProvidersPageContent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isAuthenticated: false
    }
  }

  auth = (pw: string) => {
    if(pw === "12345") {
      this.setState({
        isAuthenticated: true
      })
    } else {
      this.setState({
        showError: true
      })
    }
  }

  handleEmailClick = (companyEmailID: string, event: any) => {
    let emailField = $(`#${companyEmailID}`).select();
    document.execCommand("copy");
  }

  createProviders = () => {
    const section = sections.map((section, i) => {
      if(section.providerSections) {
        const provider = section.providerSections.map((providerSection, j) => {
          if(providerSection.companies) {
            const company = providerSection.companies.map((company, k) => {
              return (
                <div className="individual-provider--container" key={k}>
                  <div className="provider--name">
                    <h4>{company.name}</h4>
                  </div>
                  <div className="provider-attributes--container">
                    <div className="provider--attribute-md">
                      <h6 className="provider-attribute--title">CONTACT</h6>
                      <p className="provider-attribute--body">{company.contact}</p>
                    </div>
                    <div className="provider--attribute-md provider-attribute-email--container">
                      <div className="provider-email--action-explanation">
                        <p>Click email to copy to clipboard</p>
                      </div>
                      <h6 className="provider-attribute--title">EMAIL</h6>
                      <textarea readOnly={true} type="text" id={`visible-input-${company.id}`} className="provider-attribute--body provider-attribute--email" value={company.email} onClick={() => this.handleEmailClick(`visible-input-${company.id}`)}/>
                    </div>
                    {
                      company.offices && (
                        <div className="provider--attribute-md">
                          <h6 className="provider-attribute--title">OFFICES</h6>
                          <p className="provider-attribute--body">{company.offices}</p>
                        </div>
                      )
                    }
                    {
                      company.hq && (
                        <div className="provider--attribute-md">
                          <h6 className="provider-attribute--title">HQ</h6>
                          <p className="provider-attribute--body">{company.hq}</p>
                        </div>
                      )
                    }
                    {
                      company.differentiation && (
                        <div className="provider--attribute-lg">
                          <h6 className="provider-attribute--title">DIFFERENTIATION</h6>
                          <p className="provider-attribute--body">{company.differentiation}</p>
                        </div>
                      )
                    }
                    {
                      company.pricing && (
                        <div className="provider--attribute-lg">
                          <h6 className="provider-attribute--title">PRICING</h6>
                          <p className="provider-attribute--body">{company.pricing}</p>
                        </div>
                      )
                    }
                    {
                      company.clients && (
                        <div className="provider--attribute-lg">
                          <h6 className="provider-attribute--title">CLIENTS</h6>
                          <p className="provider-attribute--body">{company.clients}</p>
                        </div>
                      )
                    }
                  </div>
                </div>
              )
            })
            return (
              <div className={providerSection.className} key={j}>
                <h3 className="provider-section--name">{providerSection.title}</h3>
                <div className="flex--grid-no-justify">
                  {company}
                </div>
              </div>
            )
          } else {
            return null;
          }
        })
        return (
          <div className="providers--section" key={i}>
            <section id={`providers--${section.id}`} className="thirds--section">
              <div className="thirds-section--inner">
                <div className="thirds-section--second">
                  <h2 className="text--white providers--section-title">{section.title}</h2>
                  <h6 className="eyebrow thirds-section--eyebrow">Includes</h6>
                  <p className="text--white providers--section-description">{section.description}</p>
                </div>
                <div id="providers--thirds-white-box" className="thirds-section--first"></div>
              </div>
            </section>
            <section className="providers--sections-container">
              <div className="providers-sections--container-inner">
                <div className="flex--grid">
                  {provider}
                </div>
              </div>
            </section>
          </div>
        )
      } else {
        return null;
      }
    })
    return section;
  }

  render() {
    const page = this.state.isAuthenticated ?
    (
      <div>
        <section id="providers--header">
          <div className="container">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div id="providers-header--inner">
                <h1 id="providers-header--heading">Operational excellence <span className="text--blue">curated for you</span>.</h1>
                <p id="providers-header--subtext">
                  We partner with best-in-class service providers who’ll help get your business up and running fast. Just reference Story Ventures when you reach out, and they’ll know they’re receiving a vetted introduction.
                </p>
                <h5 id="providers--categories-heading">CATEGORIES</h5>
                <div className="flex--grid" id="providers-categories--container">
                  {sections.map((section, i) => (
                    <ScrollToAnchorLink
                      anchor={`#providers--${section.id}`}
                      additionalClasses="link--blue service-providers--section-link flex-duo--item"
                      innerLink={section.linkText}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {this.createProviders()}
      </div>
    ) : (
      <div id="providers--unauthenticated">
        <div id="providers-unauthenticated--text">
          <h1>Please enter your password below to view our service providers.</h1>
        </div>
        {
          this.state.showError &&
          <div id="password-error--container">
            <p id="password--error-message">Sorry, that password is incorrect.</p>
          </div>
        }
        <PasswordForm
          handleAuthentication={this.auth}
        />
      </div>
    )
    return (
      <div>
        {page}
      </div>
    )
  }
}

export default ServiceProvidersPageContent