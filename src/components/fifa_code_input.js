import React, {Component} from 'react';
import { connect } from 'react-redux';

import fetchMatchData from '../actions/index';

class FifaCodeInput extends Component {

  constructor(props) {
    super(props)

    this.state = {
      fifaCode: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.fetchMatchData(this.state.fifaCode)
    this.setState({ fifaCode: '' })
  }

  handleChange(event) {
    this.setState({ fifaCode: event.target.value })
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit.bind(this)}
        className="fifa-code-input">
        <input
          type="text"
          value={this.state.fifaCode}
          onChange={this.handleChange.bind(this)}/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}


export default connect(null, { fetchMatchData })(FifaCodeInput);
