import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/form';
import List from './components/list';
import Search from './components/search';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Mi agenda</h1>
        <hr/>
        
        <div className="row">
          <div className="col-sm-12">
            <Search/>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-10">
            <List/>
          </div>
          
          <div className="col-sm-2">
            <div className="row">
              <Form/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
