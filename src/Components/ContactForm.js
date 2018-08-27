import React from 'react';
import $ from 'jquery';

class ContactForm extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        email: '',
        showError: false,
        successfulSubmit: false
      }
    }

    handleSubmit = () => {
      if (this.validateEmail()) {
        const signUpData = {
          'email': this.state.email
        }
        $.ajax({
          url: "https://formspree.io/connor@aldenwolf.com",
          method: "POST",
          dataType: "json",
          data: signUpData,
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
      var email = this.state.email;
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
        <div>
          {formBody}
        </div>
      );
    }

};

export default ContactForm;