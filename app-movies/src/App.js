import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import { Component } from 'react';

class App extends Component {
  render() {
      return (
      
      <div className="App">
        <Header />
        <article className="App-article">
          <i class="fas fa-film fa-5x"></i>
          <p>
          The magic of Cinema!
          </p>
          <p>
          Memorable movie cards
          </p>
        </article>
      </div>
    );
  }
  
}

export default App;
