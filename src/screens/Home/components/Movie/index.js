import React, { Component } from 'react';
import './Movie.less';


class Movie extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, time, iframe } = this.props;
    return (
      <div className={`movieItem`}>
        <div className="iframe">
          <iframe src={iframe} frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className="descMovie">
          <p className="title">{title}</p>
          <p className="time">{time}</p>
        </div>
      </div>
    );
  }
}

export default Movie;
