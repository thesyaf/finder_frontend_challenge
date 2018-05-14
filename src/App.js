import React, { Component } from 'react';
import { Button, Container, Row } from 'reactstrap';
import './App.css';

import Navigation from './components/nav';
import Feedlist from './components/feedlist';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Awesome Website</h1>
        </header>

        <Navigation />

          <Row>
            <div className="feed-list">
              <h3>Top 5 Posts</h3>
              <div className="posts">
                <Feedlist />                
              </div>
            </div>

            <div className="feed-right">
              <h3>Image of the week</h3>
              <img className="main-image" src={require("./data/fgcss.gif")} />
              <Button>See More</Button>
              <hr></hr>
              <h3>Quote of the week</h3>
              <div className="quote-box">
                <p className="quote-text">“Lateral Thinking with Withered Technology”</p>
                <p className="quoter">-Gunpei Yokoi</p>
              </div>
              <Button>More Quotes</Button>
              
            </div> 
          </Row>    
      </div>
    );
  }
}

export default App;
