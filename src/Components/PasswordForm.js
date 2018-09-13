import React from 'react';
import $ from 'jquery';

class PasswordForm extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        password: '',
        showError: false,
        isActive: false
      }
    }

    handleKeyPress = (e) => {
      if (e.key === 'Enter' && this.state.isActive) {
        this.props.handleAuthentication(this.state.password);
      }
    }

    componentDidMount = () => {
      document.addEventListener('keypress', this.handleKeyPress);
    }

    componentWillUnmount = () => {
      document.removeEventListener('keypress', this.handleKeyPress);
    }

    handleInputChange = (e) => {
      this.setState({
        password: e.target.value,
        showError: false,
        isActive: true
      })
    }

    handleBlur = () => {
      this.setState({
        isActive: false
      })
    }

    render() {
      return (
        <div id="password--input-container">
          <label className="text--blue" id="password-input--label">PASSWORD</label>
          <div id="pw-input--inner">
            <input type="password" className="form-control small-form--input" placeholder="••••••••••" onChange={this.handleInputChange} onBlur={this.handleBlur}/>
            <button className="small-form--password" onClick={() => this.props.handleAuthentication(this.state.password)}>Get access</button>
          </div>
        </div>
      );
    }

};

export default PasswordForm;