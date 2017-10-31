import React from 'react';
import NavBarContainer from "../nav_bar/nav_bar_container";

class Homepage extends React.Component{


  render(){
    return (
      <div className="homepage">
        <NavBarContainer/>
        <div className="homepage-img-div">
          <img src={window.img_outside}/>
        </div>
        <div className="homepage-search">
          <h1>Find your next experience</h1>
        </div>
        <div className="homepage-bottom">

        </div>
      </div>
    );
  }
}

export default Homepage;
