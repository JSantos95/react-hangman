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
      guess: []
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
    const randMovie = this.state.movieList[rand].title;
    var blank = "";
    const isLetter = /^[A-Za-z]+$/;

    for(let i = 0; i < randMovie.length; i++){
      if(randMovie[i].match(isLetter)){
        blank += "_ ";
      }else if(randMovie[i] === " "){
        blank += "|";
      }else{
        blank += randMovie[i];
      }
    }
    this.setState({
      movieTitle: randMovie,
      guess: blank.split("|")
    })
  }

  render(){
    const phrase = this.state.guess.map((x) => <Title key={x.index} text={x}/>);

    return (
      <div className="App">
          <h1>Movie Hangman</h1>
          <button onClick={this.handleClick} >Start New Game</button>
          <h3>{this.state.movieTitle}</h3>
          {phrase}
          <Letters />
          <Man />
      </div>
    );
  }
}

export default App;
