import React from 'react';
import './App.css';
import Title from './Title'
import Letters from './Letters'
import Man from './Man'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      movieList: [],
      movieTitle: '',
      guess: '',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=a5bf2e68ac98505ad392cb7cc10b4ca3&language=en-US&page=1")
      .then(response => response.json())
      .then(response => {
        const {results} = response
        this.setState({movieList: results})
      });
  }

  handleClick(){
    const rand = Math.floor(Math.random() * this.state.movieList.length);
    const randMovie = this.state.movieList[rand];
    this.setState({movieTitle: randMovie.title})
  }

  render(){
    return (
      <div className="App">
          <h1>Movie Hangman</h1>
          <button onClick={this.handleClick} >Start New Game</button>
          <h3>{this.state.movieTitle}</h3>
          <Title />
          <Letters />
          <Man />
      </div>
    );
  }
}

export default App;
