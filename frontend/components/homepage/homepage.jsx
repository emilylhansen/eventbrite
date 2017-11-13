import React from 'react';
import { Link } from 'react-router-dom';

import NavBarContainer from "../nav_bar/nav_bar_container";
import PageFooter from "../footer/footer";

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
              <div className="homepage-categories-one-top">
                <img src={window.img_music}/>
                <div className="homepage-categories-one-top-info">
                  <Link to={{pathname: `/events/category/music`}}
                    value="Music" >Music</Link>
                  <div className="homepage-categories-one-top-text">
                    <p>
                      Intimate house concerts, major music festivals, and the occasional dance party
                    </p>
                  </div>
                </div>
              </div>

              <div className="homepage-categories-one-bottom">
                <img src={window.img_food}/>
                <div className="homepage-categories-one-bottom-info">
                  <Link to={{pathname: `/events/category/food-and-drink`, state:{category: "Food & Drink"}}}
                    value="Food & Drink" >Food & Drink</Link>
                  <div className="homepage-categories-one-bottom-text">
                    <p>
                      Intimate house concerts, major music festivals, and the occasional dance party
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="homepage-categories-two">
              <div className="homepage-categories-two-top">
                <img src={window.img_yoga2}/>
                <div className="homepage-categories-two-top-info">
                  <Link to={{pathname: `/events/category/classes`, state:{category: "Classes"}}}
                    value="Classes" >Classes</Link>
                  <div className="homepage-categories-two-top-text">
                    <p>
                      Intimate house concerts, major music festivals, and the occasional dance party
                    </p>
                  </div>
                </div>
              </div>
              <div className="homepage-categories-two-middle">
                <img src={window.img_arts}/>
                <div className="homepage-categories-two-middle-info">
                  <Link to={{pathname: `/events/category/arts`, state:{category: "Arts"}}}
                    value="Arts" >Arts</Link>
                  <div className="homepage-categories-two-middle-text">
                    <p>
                      Intimate house concerts, major music festivals, and the occasional dance party
                    </p>
                  </div>
                </div>
              </div>
              <div className="homepage-categories-two-bottom">
                <img src={window.img_party}/>
                <div className="homepage-categories-two-bottom-info">
                  <Link to={{pathname: `/events/category/parties`, state:{category: "Parties"}}}
                    value="Parties" >Parties</Link>
                  <div className="homepage-categories-two-bottom-text">
                    <p>
                      Intimate house concerts, major music festivals, and the occasional dance party
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="homepage-categories-three">
              <div className="homepage-categories-three-top">
                <img src={window.img_sports2}/>
                <div className="homepage-categories-three-top-info">
                  <Link to={{pathname: `/events/category/sports-and-wellness`, state:{category: "Sports & Wellness"}}}
                    value="Sports & Wellness" >Sports & Wellness</Link>
                  <div className="homepage-categories-three-top-text">
                    <p>
                      Intimate house concerts, major music festivals, and the occasional dance party
                    </p>
                  </div>
                </div>
              </div>
              <div className="homepage-categories-three-bottom">
                <img src={window.img_networking}/>
                <div className="homepage-categories-three-bottom-info">
                  <Link to={{pathname: `/events/category/networking`, state:{category: "Networking"}}}
                    value="Networking" >Networking</Link>
                  <div className="homepage-categories-three-bottom-text">
                    <p>
                      Intimate house concerts, major music festivals, and the occasional dance party
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="homepage-bottom"></div>
        <PageFooter/>
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
