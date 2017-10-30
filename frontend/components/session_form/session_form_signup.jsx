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
      // this.props.fetchCategories();
      // this.props.fetchEventTypes();
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
          <span className="signin-signup-badge">E</span>

          <div className="signin-signup-header">
            <h1>Welcome</h1>
            <p>Create and account.</p>
          </div>

          <div className="signin-signup-form">
            <label>Email address</label>
            <p>{this.state.email}</p>

              <div className="signin-signup-names">
                <div>
                  <label>First Name</label>
                  <br></br>
                  <input type="text" value={this.state.first_name} onChange={this.handleInput('first_name')}></input>
                </div>

                <div>
                  <label>Last Name</label>
                  <br></br>
                  <input type="text" value={this.state.last_name} onChange={this.handleInput('last_name')}></input>
                </div>

              </div>

            <br></br>
            <label>Password</label>
            <br></br>
              <input type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                className="signin-signup-input"
              />
            <br></br>
            <input type="submit" value="Sign Up" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionFormSignup);
