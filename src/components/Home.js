import React, { Component } from 'react';

import noise from '../img/blue-static.gif';

// import { Link } from 'react-router';

class Home extends Component {

  buttonHandler() {
    window.open('https://cochlearkill.bandcamp.com/album/re-imaginings');
  }
  
  render() {
    return (
      <div className="main-content home"> 
        <div className="hero"> 
        <div className="hero-overlay" style={{'backgroundImage':`url(${noise})`}}>
          </div> 
          <h2>Re-imaginings</h2>
          <p>New 4 Track remix EP available from Bandcamp</p> 
          <button onClick={ this.buttonHandler }>Free Download</button>  
        </div> 


      </div>
    );
  }
}

export default Home;