import React, { Component } from 'react';
// import Spotify from 'react-icons/lib/fa/spotify';
import { getOrdinal } from '../helper';       
        
class Album extends Component {
	spinnerHide(event) {
		console.dir(event.target);
		event.target.classList.remove('loading');
	}
 
	render() {
		var height;
		if(this.props.type === "bandcamp") {
			height = '274px'
		} else {
			height = '166px';
		}
		const monthNames = ["January", "February", "March", "April", "May", "June",
  			"July", "August", "September", "October", "November", "December"];
  		const date = this.props.released;	 
		const releaseDate = `${monthNames[date.getMonth()]} ${date.getDate()}${getOrdinal(date.getDate())},  ${date.getFullYear()}`;
	    const embedStyles = {
	      border: 'solid 1px #888888',
	      width: '100%',
	      'maxWidth': '700px',
	      height: height
	    } 		
		return(       
	        <section>
	          <iframe className="loading" style={embedStyles} src={this.props.src} seamless onLoad={ (e) => this.spinnerHide(e) }><a href={this.props.link}>re-imaginings by Cochlear Kill</a></iframe>
	          <div className="details">
	            <h3>{this.props.title}</h3>
	            <p>{releaseDate}</p>
	            <p>{this.props.desc}</p>
	          </div>  
	        </section>
	    	);
        }
}

export default Album;        
        