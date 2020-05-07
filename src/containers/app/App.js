import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import { getAdvice } from '../../actions/advice'
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

const mapStateToProps = ({ advice }) => ({
  advice: advice.text
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAdvice
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
