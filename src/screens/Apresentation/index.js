import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Apresentation.less'; 

class Apresentation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="body apresentation">
        <a href="http://estrategia.autoridadefitness.com" target="_blank"><div className="logo"></div></a>
        <a href="https://pay.hotmart.com/E6255213H?off=a8rqxgs9&hideBillet=1" target="_blank"><div className="buyButton">Assine</div></a>
        <div className="container">
          <div className="movie">
          <iframe src="https://www.youtube.com/embed/AdlfNujAS6A?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
          </div>
          <div className="desc">
            <h1>Você precisa entender o seu corpo</h1>
            <h2>para poder cuidar dele</h2>
            <Link to="/home"><div className="button"><i className="fa fa-youtube-play"></i> Visualizar vídeos</div></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Apresentation;
