import React from 'react';
import { Link } from 'react-router-dom';

import NavBarContainer from "../nav_bar/nav_bar_container";

class Homepage extends React.Component{
  constructor(props){
    super(props);

  }

  render(){

    return (
      <div className="homepage">
        <NavBarContainer/>
        <div className="homepage-img-div">
          <img className="slides" src={window.img_outside}/>
        </div>
        <div className="homepage-search">
          <h1>Find your next experience</h1>
        </div>

        <div className="homepage-categories">
          <h1>Browse by Top Categories</h1>
          <div className="homepage-categories-main">

            <div className="homepage-categories-one">
              <Link to={{pathname: `/events/music`}}
                value="Music" >Music</Link>
              <Link to={{pathname: `/events/food-and-drink`, state:{category: "Food & Drink"}}}
                value="Food & Drink" >Food & Drink</Link>
              <Link to={{pathname: `/events/classes`, state:{category: "Classes"}}}
                value="Classes" >Classes</Link>
              <Link to={{pathname: `/events/arts`, state:{category: "Arts"}}}
                value="Arts" >Arts</Link>
              <Link to={{pathname: `/events/parties`, state:{category: "Parties"}}}
                value="Parties" >Parties</Link>
              <Link to={{pathname: `/events/sports-and-wellness`, state:{category: "Sports & Wellness"}}}
                value="Sports & Wellness" >Sports & Wellness</Link>
              <Link to={{pathname: `/events/networking`, state:{category: "Networking"}}}
                value="Networking" >Networking</Link>
            </div>

          </div>
        </div>
        <div className="homepage-bottom"></div>
      </div>
    );
  }
}

export default Homepage;







// <div className="homepage-categories-two">
//   <div className="homepage-categories-one-top">
//     <img src={window.img_outside}/>
//     <h1>Food & Drink</h1>
//     <p>Dinner parties, tastings, and big-time festivals</p>
//   </div>
//   <div className="homepage-categories-one-middle">
//     <img src={window.img_outside}/>
//     <h1>Food & Drink</h1>
//     <p>Dinner parties, tastings, and big-time festivals</p>
//   </div>
//   <div className="homepage-categories-one-bottom">
//     <img src={window.img_outside}/>
//     <h1>Food & Drink</h1>
//     <p>Dinner parties, tastings, and big-time festivals</p>
//   </div>
// </div>
//
// <div className="homepage-categories-three">
//   <div className="homepage-categories-one-top">
//     <img src={window.img_outside}/>
//     <h1>Food & Drink</h1>
//     <p>Dinner parties, tastings, and big-time festivals</p>
//   </div>
//   <div className="homepage-categories-one-bottom">
//     <img src={window.img_outside}/>
//     <h1>Food & Drink</h1>
//     <p>Dinner parties, tastings, and big-time festivals</p>
//   </div>
// </div>
