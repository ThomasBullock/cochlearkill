import React, {Component} from 'react';
// import github from '../img/github-256.png';
import RedBass from '../img/Red_Bass_l.jpg';

class Visual extends Component {
  render() {
    return (
      <div className="main-content visual">
        <h2>Coming Soon</h2>
          <div className="picture">
              <img src={RedBass} alt="Close up of glowing bass guitar strings"/>
          </div>  

      </div>
    );
  }
}

export default Visual;