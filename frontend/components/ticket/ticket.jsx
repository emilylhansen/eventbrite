import React from 'react';
import { Link } from 'react-router-dom';

class Ticket extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.numTicketsToPurchase;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    
  }

  render(){
    const ticketOpts = [...Array(10).keys()].map(i => (
      <option key={i}>{i+1}</option>
    ));

    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <header>
            Register
          </header>

          <p>Sales end on {this.props.event.start_date_time}</p>

          <div>
            <div></div>
            <div>
              <h1>RSVP</h1>
              <h2>{this.props.event.price}</h2>

              <select value={this.props.numTicketsToPurchase}
                onChange={this.handleInput('numTicketsToPurchase')}
                >
                {ticketOpts}
              </select>

            </div>
          </div>

          <div>
            <span>QTY: {this.state.numTicketsToPurchase}</span>
            <span>USD: </span>
            <input type="submit" >CHECKOUT</input>
          </div>

        </form>
      </div>
    );
  }
}

export default Ticket;
