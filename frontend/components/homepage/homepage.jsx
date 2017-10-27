import React from 'react';
import NavBarContainer from "../navbar/navbar_container";

class Homepage extends React.Component{

  render(){
    return (
      <div>
        <NavBarContainer/>
        <div className="homepage-img">
          <img src={window.homepage}></img>
        </div>
      </div>
    )
  }
}

export default Homepage;