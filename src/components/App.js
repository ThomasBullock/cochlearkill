import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import background from '../img/Cochlear_Kill_Magenta_web.jpg';

import Header from './Header';

class Overlay extends Component {
  render() {
    return (
      <div className="overlay" style={{'backgroundImage':'url(' + this.props.image + ')'}}>
      </div>
    );
  }
}

class Container extends Component {
    render() {
      return (
        <div className="container">
          {this.props.children}
        </div>
      )
  }
}


class App extends Component {
  constructor() {
    super();
    
    this.state = {
        mounted: false,    
    }
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }
  
  render() {
    var overlay, container;
    if(this.state.mounted) {
      overlay = ( <Overlay image={background}/> );
    
      container = ( 
        <Container>
          <Header />
          {this.props.children}
        </Container>);
    }
    
    return (
      <div className="app">
        <ReactCSSTransitionGroup transitionName="overlay" transitionEnterTimeout={2500} transitionLeaveTimeout={2300}>
          {overlay}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup transitionName="container" transitionEnterTimeout={2500} transitionLeaveTimeout={2300}>          
          {container}
        </ReactCSSTransitionGroup>  
      </div>  
    );
  }
}

export default App;
