import React, { Component } from 'react';
import Facebook from 'react-icons/lib/fa/facebook';
import Twitter from 'react-icons/lib/fa/twitter';
import Soundcloud from 'react-icons/lib/fa/soundcloud';
import Youtube from 'react-icons/lib/fa/youtube';
import Instagram from 'react-icons/lib/fa/instagram';

// import SelectCountry from './SelectCountry';

class Contact extends Component {
	// Subscribe a new account holder to a MailChimp list

	
	
	submitMailingList(event) {
		event.preventDefault();
	}
	
	render(){
		const divStyle = {
			position: 'absolute', 
			left: '-5000px'	
		}
		const noDisplay = {
			display: 'none'
		}
		return(
			<div className="main-content contact">
				<div className="contact-wrapper">
					<div className="social">
						<ul>
							<li><a href="https://www.facebook.com/CochlearKill/"><Facebook className="fa facebook"/></a></li>
							<li><a href="https://soundcloud.com/cochlearkill"><Soundcloud className="fa soundcloud"/></a></li>
							<li><a href="https://twitter.com/cochlearkill"><Twitter className="fa twitter"/></a></li>
							<li><a href="https://www.youtube.com/user/cochlearkill"><Youtube className="fa youtube"/></a></li>
							<li><a href="https://www.instagram.com/cochlearkill/"><Instagram className="fa instagram"/></a></li>	 
						</ul>
					</div>
					
					
				<form action="//cochlearkill.us9.list-manage.com/subscribe/post?u=f990df3a163b20e98e5ba41f3&amp;id=f8685001cd" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate mailing-list" target="_blank" noValidate>

					<p>If you'd like very infrequent updates about Cochlear KIll's various doings and transpirings...</p>
					<h2>Subscribe to our mailing list</h2>

					<div className="mc-field-group email-grp">
						<label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span>
					</label>
						<input type="email" name="EMAIL" className="required email" id="mce-EMAIL"/>
					</div>
					<div className="mc-field-group name-grp">
						<label htmlFor="mce-FNAME">First Name </label>
						<input type="text" name="FNAME" className="" id="mce-FNAME"/>
					</div>
					<div className="mc-field-group name-grp">
						<label htmlFor="mce-LNAME">Last Name </label>
						<input type="text" name="LNAME" className="" id="mce-LNAME"/>
					</div>
					<div className="mc-field-group country-grp">
						<label htmlFor="mce-MMERGE3">Country </label>
						<select name="MMERGE3" id="mce-MMERGE3">
							<option value="AR">Argentina</option>
							<option value="AU">Australia</option>
							<option value="BR">Brazil</option>
							<option value="CA">Canada</option>
							<option value="CL">Chile</option>
							<option value="CN">China</option>				
							<option value="DK">Denmark</option>
							<option value="FJ">Fiji</option>
							<option value="FI">Finland</option>		
							<option value="FR">France</option>
							<option value="DE">Germany</option>
							<option value="GR">Greece</option>
							<option value="HU">Hungary</option>
							<option value="IL">Israel</option>
							<option value="IT">Italy</option>
							<option value="JM">Jamaica</option>			
							<option value="JP">Japan</option>			
							<option value="NZ">New Zealand</option>
							<option value="RU">Russian Federation</option>
							<option value="SG">Singapore</option>
							<option value="ES">Spain</option>	
							<option value="SE">Sweden</option>
							<option value="CH">Switzerland</option>												
							<option value="GB">United Kingdom</option>
							<option value="US">United States</option>
						</select>	
					</div>

						<div id="mce-responses" className="clear">
							<div className="response" id="mce-error-response" style={noDisplay}></div>
							<div className="response" id="mce-success-response" style={noDisplay}></div>
						</div>   {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
					    <div style={divStyle} aria-hidden="true"><input type="text" name="b_f990df3a163b20e98e5ba41f3_f8685001cd" tabIndex="-1" value=""/></div>
					    <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>

				</form>
					
				</div>
			</div>
		)
	}
}

export default Contact;