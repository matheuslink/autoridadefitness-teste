import React, { Component } from 'react';
import { videoListConst } from '../../config/helper';
import Movie from './components/Movie';

import './Home.less';


class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      initialVideoList: videoListConst,
      videoList: [],
    }

    this.renderVideos = this.renderVideos.bind(this);
    this.filterList = this.filterList.bind(this);
  }
  componentWillMount() {
    this.setState({ videoList: this.state.initialVideoList })
  }
  filterList(e) {
    e.preventDefault();
    let updateList = this.state.initialVideoList.slice();
    updateList = updateList.filter((item) => {
      return item.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    this.setState({ videoList: updateList });
  }
  renderVideos(video, i) {
    return (
      <Movie 
        key={i}
        title={video.title}
        time={video.time}
        iframe={video.iframe}
      />
    )
  }
  render() {
    return (
      <div className="body home">
        <div className="nav">
          <i className="fa fa-search"></i>
          <input type="text" placeholder="Pesquisar vídeos" onChange={this.filterList}/>
          <div className="logoNav"></div>
        </div>
        <div className="videosContainer">
        {this.state.videoList.map(this.renderVideos)}
        </div>
      </div>
    );
  }
}

export default Home;
