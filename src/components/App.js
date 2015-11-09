import './style/App.scss';

import React, { Component } from 'react';
import Header from './Header.js';
import ConversationList from './ConversationList.js';

export default class App extends Component {
  render() {
    return (
      <div id='app'>
        <Header />
        <ConversationList />
      </div>
    );
  }
}
