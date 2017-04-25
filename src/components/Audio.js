import React, { Component } from 'react';

import Album from './Album';
import albumData from '../data/albumData';


// import { Link } from 'react-router';

class Audio extends Component {

  render() {
    return (
      <div className="main-content audio">
        <h2>Studio Recordings</h2>
          {
            Object.keys(albumData)
              .map(key => <Album 
                            key={key} 
                            title={albumData[key].title} 
                            released={albumData[key].released}
                            desc={albumData[key].desc}
                            src={albumData[key].src}
                            link={albumData[key].link}
                            type="bandcamp"
                          />
                    )
          }
        <h2>Live Recordings</h2>
        <Album 
          title="Pseudoephedrine" 
          released={new Date('October 4 2013')}
          desc="Live at Yah Yahs - Collingwood, Melbourne."
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/114019934&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
          link="https://soundcloud.com/cochlearkill/pseudoephedrine-live-yah-yahs"
          type="soundcloud"
        />
        <Album 
          title="The New Order And My Place In It" 
          released={new Date('February 13 2013')}
          desc="The Public Bar - North Melbourne. Plenty of bum notes in this live recording but this song was never realized in the studio so here you go."
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/79190623&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
          link="https://soundcloud.com/cochlearkill/cochlear-kill-the-new-order"
          type="soundcloud"
        />        
      </div>
    );
  }
}

export default Audio;


