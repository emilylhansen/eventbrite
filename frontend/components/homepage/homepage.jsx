import React from 'react';
import NavBarContainer from "../nav_bar/nav_bar_container";

class Homepage extends React.Component{


  render(){
    return (
      <div>
        <NavBarContainer/>
        <div className="homepage-img-div">
          <img src={window.img_outside}/>
        </div>
      </div>
    );
  }
}

export default Homepage;
