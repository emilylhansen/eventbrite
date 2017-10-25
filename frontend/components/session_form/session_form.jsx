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

  // componentWillReceiveProps(newProps) {
  //   if (!newProps.email){
  //     this.props.history.push('signin');
  //   }
  // }

  match() {
    let match;

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
    // debugger
    e.preventDefault();
    const match = this.match();
    this.props.receiveEmail(this.state.email)
    if ( match === undefined){
      this.props.history.push('signin/signup');
    } else {
      this.props.history.push('signin/login');
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
        <Link to='/' className="signin-form-container-link">x</Link>

        <form onSubmit={this.handleSubmit} className="signin-form-box">
          <span className="signin-form-badge">E</span>

          <div className="signin-form-header">
            <h1>Let's get started</h1>
            <p>Enter your email to sign up or log in.</p>
          </div>

          <div className="signin-form">
            <label>Email address</label>
            <br></br>
              <input type="text"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleInput('email')}
                className="signin-input"
              />
            <br></br>
            <input type="submit" value="Get Started" disabled={!this.state.email || this.state.email.length < 10}/>
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
