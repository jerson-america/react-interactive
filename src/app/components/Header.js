import React from 'react';
import { Link } from 'react-router';

require('../css/header.scss');

export default class Header extends React.Component{

  constructor(){
    super();

    this.state = {
      link :[
        'Home',
        'About',
        'Services',
        'Archived'
      ]
    }
  }
  
  getList(){
    var link;
    return (
      <ul>
        {this.state.link.map((text, i) => {
          link = (text == "Home") ? "/" : text;
          return (<li key={i}><Link to={link}>{text}</Link></li>);
        })}
      </ul>
    );
  }
  render (){

    return(
      <header id="header">
        <div className="wrap clear-float">
            <div className="social-wrap">
              <ul>
                <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
                <li><i className="fa fa-google-plus" aria-hidden="true"></i></li>
              </ul>
            </div>
            <div className="top-link-wrap">
              {this.getList()}
            </div>
        </div>
      </header>
    );
  }
}
