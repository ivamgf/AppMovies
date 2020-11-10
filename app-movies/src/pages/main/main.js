import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './main-style.css';
import '../../App.css';

export default class Main extends Component {
    render() {
        return (
            <article className="App-article">
                <button type="button" className="btn btn-style btn-style-hov">
                    <i className="fas fa-film fa-5x"></i><br></br>
                    See Movie Cards...
                </button>
                
                <p>
                The magic of Cinema!
                </p>
                <p>
                Memorable movie cards
                </p>
            </article>
        )
    }
}