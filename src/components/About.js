import React, {Component} from 'react';
// import github from '../img/github-256.png';
import noiseboxLg from '../img/Noisebox-l.jpg';
import noiseboxSm from '../img/Noisebox-s.jpg';

class About extends Component {
  render() {
    return (
      <div className="main-content about">
        <div className="picture">
          <img src={noiseboxLg} srcSet={`${noiseboxSm} 500w, ${noiseboxLg} 800w`} alt="Noisebox effects pedal"/>
        </div>
        <div className="facts">
          <p><strong>Formed: </strong>Brisbane, Australia in 2009</p>
          <p><strong>Status: </strong>In Melbourne, on Hiatus</p>
          <p><strong>Personnel: </strong>T. Bullock</p>
          <p><strong>Former Personnel: </strong>T. Madden, S. Pearlman, L. Bowden, C. Bowe</p>
          <p><strong>Genres: </strong>Shoegaze, Post-Punk, Post-Rock, Trip-Hop</p>
          <p><strong>Influences: </strong>My Bloody Valentine, The Cure, Swans, Nirvana, The Beatles</p>
        </div>

          <div className="bio"><p><strong>Bio: </strong>It started in a bedroom in Brisbane when a muso with too many pedals, too much time and a penchant for home recording set about doing something with the ideas he’d stockpiled over the years. Taking the dissonant effected guitar of shoegaze as a starting point, vocoders, loops, noise and found sounds were added to create a wall of sound best described as music on the hallucinogenic side of pop. 
Eventually relocating to Melbourne a 7” single Head in The Ether / Scarlet Sometimes surfaced in 2010, followed by their debut album Cochlear Kill later the following year.
Absorbing like minds the band morphed into a quartet and 
emerging from its bedroom confines took to the live scene. On Colour Me Radd the third CK release, the usual DIY recordings were allowed out of the home studio for the first time to be sculptured by the seasoned ears of Lindsay Gravina (Faker, Rowland S Howard, HRTK) and Bryce Moorhead (Violent Soho).</p>
         </div>
      </div>
    );
  }
}

export default About;