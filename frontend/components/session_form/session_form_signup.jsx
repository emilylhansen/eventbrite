import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionFormSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      password: "",
      first_name: "",
      last_name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleInput(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
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
      <div className="signin-signup-form-container">
        <Link to='/' className="signin-signup-form-container-link">x</Link>

        <form onSubmit={this.handleSubmit} className="signin-signup-form-box">
          <h1>Welcome</h1>
          <h2>Create and account.</h2>


          <div className="signin-signup-form">
            <label>Email address</label>
            <p>{this.state.email}</p>
            <div>
              <label>First Name</label>
              <input type="text" value={this.state.first_name} onChange={this.handleInput('first_name')}></input>
              <label>Last Name</label>
              <input type="text" value={this.state.last_name} onChange={this.handleInput('last_name')}></input>
            </div>
            <label>Password</label>
              <input type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                className="signin-signup-input"
              />

            <input type="submit" value="Sign Up" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionFormSignup);
