import React, { Component } from 'react';
import Home from './components/Home/home';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faGithubAlt, faLinkedinIn, faFileAlt, faBars);

class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

export default App;
