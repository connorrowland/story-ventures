import React from 'react';
import $ from 'jquery';

class ContactForm extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        email: '',
        showError: false,
        successfulSubmit: false,
        isActive: false
      }
    }

    handleKeyPress = (e) => {
      if (e.key === 'Enter' && this.state.isActive) {
        this.handleSubmit();
      }
    }

    componentDidMount = () => {
      document.addEventListener('keypress', this.handleKeyPress);
    }

    componentWillUnmount = () => {
      document.removeEventListener('keypress', this.handleKeyPress);
    }

    handleSubmit = () => {
      if (this.validateEmail()) {
        const signUpData = {
          'email': this.state.email
        }
        $.ajax({
          url: "https://formspree.io/xkzwwvnm",
          method: "POST",
          data: signUpData,
          dataType: "json",
          success: function(data) {
            var self = this;
            $("#signup--input-container").fadeOut(function(){
              self.setState({
                successfulSubmit: true
              })
              $("#signup--confirmation-text").fadeIn()
            })
          }.bind(this),
          error: function(xhr, status, err) {
              console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
      } else {
        this.setState({
          showError: true
        })
      }
    }

    handleEmailChange = (e) => {
      this.setState({
        email: e.target.value,
        showError: false
      })
    }

    validateEmail = () => {
      this.setState({
        isActive: true
      })

      const email = this.state.email;
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(email)){
        return true
      } else {
        return false
      }
    }

    renderForm = () => {
      return (
        <div id="signup--input-container">
          {this.state.showError &&
            <p id="signup--error-message">Sure that’s your email?</p>
          }
          <input type="email" className="form-control" placeholder="youremail@email.com" onBlur={this.validateEmail} onChange={this.handleEmailChange}/>
          <button onClick={this.handleSubmit}>Get in touch</button>
        </div>
      )
    }

    renderConfirmation = () => {
      return (
        <div id="signup--confirmation-text">
          <p>Thanks! We’ll be in touch soon.</p>
        </div>
      )
    }

    render() {
      const formBody = this.state.successfulSubmit ? this.renderConfirmation() : this.renderForm();
      return (
        <section id="signup--container">
          <div id="signup--intro-container">
            <h2>Let’s write the future together.</h2>
          </div>
          {formBody}
        </section>
      );
    }

};

export default ContactForm;