import React from 'react';
import NavBarContainer from "../nav_bar/nav_bar_container";

class Homepage extends React.Component{
  constructor(props){
    super(props);
    // this.current = 0;
    // this.slideShow = this.slideShow();
  }
  // slideShow(){
  //   const slides = document.getElementsByClassName("slides");
  //   for(const i = 0; i < slides.length; i++){
  //     slides[i].style.display = "none";
  //   }
  //   this.current += 1;
  //   slides[this.current%slides.length].style.display = "block";
  //   setTimeout(this.slideShow, 2000);
  // }

  render(){
    // <img className="slides" src={window.img_concert}/>
    // <img className="slides" src={window.img_pride}/>
    // <img className="slides" src={window.img_baking}/>
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
              <div className="homepage-categories-one-top">
                <img src={window.img_outside}/>
                <h1>Music</h1>
                <p>Intimate house concerts,
                  major music festivals,
                  and the occasional dance party</p>
              </div>
              <div className="homepage-categories-one-bottom">
                <img src={window.img_outside}/>
                <h1>Food & Drink</h1>
                <p>Dinner parties, tastings, and big-time festivals</p>
              </div>
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
