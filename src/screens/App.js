import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Apresentation from './Apresentation';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Apresentation}/>
          <Route path="/home" component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;