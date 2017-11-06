import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserShowIndexItem extends React.Component {
  constructor(props){
    super(props);

    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount(){
    if(this.props.event.current_user_saved){
      document.getElementById(`${this.props.event.event_id}`).classList.remove("fa-bookmark-o");
      document.getElementById(`${this.props.event.event_id}`).classList.add("fa-bookmark");
    }
  }

  convertPrice(price){
    const newPrice = price.toString().split(".");
    if (price === 0){
      return "FREE";
    } else if (newPrice.length === 1){
      return `$${newPrice[0]}.00`;
    } else if (newPrice[1].length === 1){
      return `$${price.toString()}0`;
    } else {
      return `$${price.toString()}`;
    }
  }

  convertDateTime(dateTime){
    const arr = dateTime.split(/-|T|:|\./);
    const dateArr = new Date(arr[0], arr[1], arr[2],
      arr[3], arr[4], arr[5]).toString().split(" ");
    const timeArr = dateArr[4].split(":");
    const newDate = `${dateArr[0]}, ${dateArr[1]} ${dateArr[2]} ${timeArr[0]}:${timeArr[1]}`;
    return newDate.toUpperCase();
  }

  handleSave(e){
     if (this.props.event.current_user_saved === false){
       document.getElementById(`${e.target.id}`).classList.remove("fa-bookmark-o");
       document.getElementById(`${e.target.id}`).classList.add("fa-bookmark");
       this.props.createSavedEvent({user_id: this.props.currentUser.id, event_id: e.target.id});
     } else {
       document.getElementById(`${e.target.id}`).classList.remove("fa-bookmark");
       document.getElementById(`${e.target.id}`).classList.add("fa-bookmark-o");
       this.props.deleteSavedEvent(this.props.currentUser.saved_events[e.target.id].saved_event_id);
     }
   }

  render(){
    const newPrice = this.convertPrice(this.props.event.price);
    return (
      <div className="user-index-item-li">
        <div className="user-index-item-main">
          <div className="user-index-item-info-left">
          </div>

            <div className="user-index-item-img-left">
              <div className="user-index-item-img-left-inner">
                <a>
                  <img src={this.props.event.avatar} />
                </a>
              </div>
            </div>


            <div className="user-index-item-img-right">
              <h2>{this.convertDateTime(this.props.event.start_date_time)}</h2>
              <h1><a href={`/#/events/${this.props.event.event_id}`}>{this.props.event.title}</a></h1>
              <h3>{this.props.event.location}</h3>
            </div>

            <div className="user-index-item-info-right">
              <div className="user-index-item-info-right-span-tags">
                <span>{`#${Object.values(this.props.event.category)[0].name}`} {`#${Object.values(this.props.event.eventType)[0].name}`}</span>
              </div>
              <div className="user-index-item-info-right-glyph">
                <i className="fa fa-bookmark-o"
                   aria-hidden="true"
                   id={`${this.props.event.event_id}`}
                   onClick={(e) => this.handleSave(e)}
                ></i>
              </div>
            </div>

        </div>
      </div>
    );
  }
}


export default withRouter(UserShowIndexItem);

















// comment
