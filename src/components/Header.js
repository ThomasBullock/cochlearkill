import React, { Component } from 'react';
// import menu from '../img/menu.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
  componentDidMount() {
    /// remove show class if user resizes browser with menu open 
    window.addEventListener('resize', function(){
      console.log('resize!');
      var intViewportWidth = window.innerWidth;
      if(intViewportWidth > 899) {
        document.querySelector("#js-navigation-menu").classList.remove("show");
      }
    });
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize');
  }

	menuToggle(e) {
		console.log(e.target);
		e.preventDefault();
		document.querySelector("#js-navigation-menu").classList.toggle("show");
	}
  
	
	
	render() {
		return (
      <header className="navigation" role="banner">
        <div className="navigation-wrapper">
          <Link to="/" className="logo">
            <h1>Cochlear Kill</h1>
          </Link>
          <a href="#" className="navigation-menu-button" id="js-mobile-menu" onClick={ (e) => this.menuToggle(e) }>MENU</a>
          <nav role="navigation">
            <ul id="js-navigation-menu" className="navigation-menu">
              <li className="nav-link"><Link to="/about">About Us</Link></li>
              <li className="nav-link"><Link to="/audio">Audio</Link></li>
              <li className="nav-link"><Link to="/visual">Visual</Link></li>
              <li className="nav-link"><Link to="/contact">Contact</Link></li>                
            </ul>
          </nav>
          <div className="navigation-tools">
            <div className="search-bar">
              <form role="search">
                <input type="search" placeholder="Enter Search" />
                <button type="submit">
                  <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/search-icon.png" alt="Search Icon"/>
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
		) 
	}
}

export default Header;