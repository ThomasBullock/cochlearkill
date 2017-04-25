import React, {Component} from 'react';
import {isEmpty} from '../helpers';


class Course extends Component {
  constructor() {
    super()
    
    this.completeButton = this.completeButton.bind(this);
    this.featureLink = this.featureLink.bind(this);    
  }
  
    featureLink() {
      if(this.props.entry.hasOwnProperty("example")) {
        return (
        <p className="comment-detail">Check out this <a className="comment-example" href={this.props.entry.example.link}>{this.props.entry.example.title}</a> I made during this course.</p>
      )
      }
    }

    completeButton(key) {
      if(this.props.incomplete && this.props.loggedIn) {
        return <button className="completeButton" onClick={ () => this.props.moveToComplete(key) }>Move To Complete</button>
      }
    }
  
  render() {   
  	const entry = this.props.entry;
    

    
    if(!isEmpty(entry)) {
      return (
                <div className="comment">
                  <div className="comment-image">
                    <img src={`../img/${entry.provider}.png`} alt="logo"/>
                  </div>
                  <div className="comment-content">
                    <h1>{entry.title}</h1>
                    <div className="tags-array">
                    	{
                    		entry.tags.map( (tag, index) => <span key={index} className={`badge-${tag}`}>{tag}</span>)
                    	}
                    </div>
                    <div className="teachers">
                    	{
                    		entry.teachers.map( (teacher, index) => <span key={index} className="teacher">{teacher}</span>)
                    	}                  
                    </div>
                    <p>{entry.description}</p>
                    <a href={entry.link}>Find out more</a>
                    {this.featureLink()}
                    {this.completeButton(entry.title)}
                  </div>
                </div>    
      );
    } else {
      return ( 
        <div className="comment">
            <h1>No Entries</h1>
        </div>
      )
    }
  }
}

export default Course;