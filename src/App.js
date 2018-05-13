import React, { Component } from 'react';

import { Button, Nav, Navbar, NavItem, NavLink, Container, Row } from 'reactstrap';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Awesome Website</h1>
        </header>
        <Navbar color="light">
          <Nav pills>
            <NavItem>
              <NavLink active>Home</NavLink>
              <NavLink>Members</NavLink>
              <NavLink>Photos</NavLink>
              <NavLink>Pages</NavLink>
              <NavLink>Discussions</NavLink>
              <NavLink>More</NavLink>              
            </NavItem>
          </Nav>
        </Navbar>

        <Container>
          <Row>
            <div className="feed-list">
              <h3>Top 5 Posts</h3>
              <div className="posts">
                <div className="post-title">Title here</div>
                <div className="post-summary">Summary of text here</div>
                <hr></hr>
                <div className="post-title">Title here</div>
                <div className="post-summary">Summary of text here</div>
                <hr></hr>
              </div>
            </div>

            <div className="feed-right">
              <h3>Image of the week</h3>
              <img src="" />
              <Button>See More</Button>
              <hr></hr>
              <h3>Quote of the week</h3>
              <div className="quote-box">
                <p className="quote-text">Put a quote here from somewhere</p>
                <p className="quoter">-Persons Name</p>
              </div>
              <Button>More Quotes</Button>
              
            </div> 
          </Row>    
        </Container>   
      </div>
    );
  }
}

export default App;
