import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import './App.css';

// Import in components
import Navigation from './components/nav';
import Feedlist from './components/feedlist';
import Qod from './components/qod';


class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Awesome Website</h1>
        </header>

        <Navigation />

          <Row>
            <Col xs='8' className="feed-list">
              <h3>Top 5 Posts</h3>
              <div className="posts">
                <Feedlist />                
              </div>
            </Col>

            <Col className="feed-right">
              <h3>Image of the week</h3>
              <img className="main-image" src={require("./data/fgcss.gif")} />
              <Button>See More</Button>
              <hr></hr>
              
              <h3>Quote of the week</h3>
              <Qod />
              
            </Col> 
          </Row>    
      </div>
    );
  }
}

export default App;
