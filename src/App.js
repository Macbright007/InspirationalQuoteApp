import React, { Component } from 'react';


class App extends Component {
  state = { advice: ''};

  //using componentDidMount to load a quote immediately the page loads.
  componentDidMount() {
    this.fetchQuote();
}
  
  
  //using axios to fetch data from the given API 
  fetchQuote = () => {
    const apiUrl = 'https://api.adviceslip.com/advice';
    fetch(apiUrl)
      .then((res) => res.json())
      .then((advice) => { this.setState(advice.slip) });

  //})
  }
  render() {
    const { advice } = this.state;
    

    return (
      <div className="app">
          <div className= 'card'>
            <h1 className="heading"> {advice}</h1>
            <button className="button" onClick={this.fetchQuote}>
                <span>Click to get a Quote!!</span>
            </button>
          </div>
      </div>
    );
  }
}

export default App;
