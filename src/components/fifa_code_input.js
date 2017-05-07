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
    // Animate lading during dispatch of LOADING_DATA
    const isLoading = (this.props.isLoading) ? 'is-loading' : '';

    return (
      <form onSubmit={this.handleSubmit.bind(this)}

            className="fifa-code-input"
            >
            <div className="field has-addons has-addons-centered">
              <p className="control">
                <input className="input"
                       value={this.state.fifaCode}
                       onChange={this.handleChange.bind(this)}
                       type="text"
                       placeholder="Fifa Country Code"
                       />
              </p>
              <p className="control">
                <button type="submit" className={`button ${isLoading} is-success`}>
                  Search
                </button>
              </p>
            </div>

      </form>
    )
  }
}


export default connect(null, { fetchMatchData })(FifaCodeInput);
