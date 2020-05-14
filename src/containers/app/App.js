import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router'
import HomePage from '../HomePage'
import AnotherPage from '../AnotherPage'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/another" component={AnotherPage} />
        </main>
      </div>
    )
  }
}


export default connect(
  null,
  null
)(App)
