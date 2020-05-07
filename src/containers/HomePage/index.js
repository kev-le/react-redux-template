import React, {Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push, goBack } from 'connected-react-router'
import { getAdvice } from '../../actions/advice'
import { Link } from 'react-router-dom'


class HomePage extends Component {

  componentDidMount = () => {
    // only get advice if advice text is empty
    if (this.props.advice === "") {
      this.props.getAdvice()
    }
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>Advice of the day:</p>
        <p><b>{this.props.advice}</b></p>

        <br></br>

        <Link to='/another'>Go to Another Page</Link>

        <br></br>

        <button onClick={() => this.props.getAdvice()}>Generate new Advice</button>
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
      push,
      goBack,
      getAdvice
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
