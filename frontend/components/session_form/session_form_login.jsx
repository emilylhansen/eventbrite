import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionFormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn) {
      this.props.history.push('/');
      this.props.fetchCategories();
      this.props.fetchEventTypes();
    }
  }

  handleInput(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }


  renderErrors() {
    const errs = this.props.errors.map((error, i) => (
      <li key={i}>
        {error}
      </li>
    ));

    return(
      <ul>
        {errs}
      </ul>
    );
  }

  render() {
    return (
      <div className="signin-login-form-container">
        <Link to='/' className="signin-login-form-container-link">x</Link>

        <form onSubmit={this.handleSubmit} className="signin-login-form-box">
          <span className="signin-login-badge">E</span>

          <div className="signin-login-header">
            <h1>Welcome back</h1>
            <p>Please enter your password to log in.</p>
          </div>

          <div className="signin-login-form">
            <label>Email address</label>
            <br></br>
            <p>{this.state.email}</p>
            <br></br>
            <label>Password</label>
            <br></br>
              <input type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                className="signin-login-input"
              />
            <br></br>
            <input type="submit" value="Log in" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionFormLogin);
