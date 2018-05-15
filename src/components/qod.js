import React, { Component } from 'react';
import { Button, Row } from 'reactstrap';

class Qod extends Component {
    constructor() {
        super()
        this.state = {
          quote: '',
          author: '',
          isLoading: false,
        }
        this.handleClick = this.handleClick.bind(this)
      }
    
      componentDidMount() {
        this.setState({ isLoading: true })
        fetch('https://talaikis.com/api/quotes/random/')
        .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Something went wrong ...');
            }
          })
        .then(data => this.setState({ quote: data.quote, author: data.author, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
      }

      handleClick() {
        fetch('https://talaikis.com/api/quotes/random/')
        .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Something went wrong ...');
            }
          })
        .then(data => this.setState({ quote: data.quote, author: data.author, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
      }
    
    render() {

        const { quote, author, isLoading } = this.state;
        console.log(quote, author)

        if (isLoading) {
          return <p>Loading ...</p>;
        }

        return (
            <div>
                <div className="quote-box">
                    <p className="quote-text">{quote}</p>
                    <p className="quoter">-{author}</p>
                    
                </div>
              <Button onClick={this.handleClick}>More Quotes</Button>
            </div>
            
        )
    }

};

export default Qod;