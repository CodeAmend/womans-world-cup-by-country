import React, { Component } from 'react';
import { connect } from 'react-redux';

import FifaCodeInput from './fifa_code_input';
import FifaMatchResults from './fifa_match_results';


class App extends Component  {
  render() {
    return (
      <div>
        <FifaCodeInput />
        <FifaMatchResults matchData={this.props.matchData} />
      </div>

    )
  }
}

function mapStateToProps(state) {
  return { matchData: state.matchData }
}

export default connect(mapStateToProps)(App);
