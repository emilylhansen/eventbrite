import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.match = this.match.bind(this);
  }

  componentDidMount(){
    this.props.fetchUsers();
  }

  match() {
    let match;

    // if (this.state.email.length === 0) {
    //   return this.props.users;
    // }

    this.props.users.forEach(user => {
      if (user.email === this.state.email) {
        match = user;
      }
    });

    return match;
  }

  handleInput(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const match = this.match();
    this.props.fetchUser(match.id);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
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
      <div className="signin-form-container">
        <form onSubmit={this.handleSubmit} className="signin-form-box">
          <h1>Let's get started</h1>
          <h2>Enter your email to sign up or log in.</h2>

          {this.renderErrors()}

          <div className="signin-form">
            <label>Email address</label>
              <input type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
                className="signin-input"
              />

            <input type="submit" value="Get Started" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
