// Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import FifaCodeInput from './fifa_code_input';
import FifaMatchResults from './fifa_match_results';


const Title =  () => {
  return (
    <main className="hero is-success is-bold title">
      <article className="level-item hero-body has-text-centered">
        <h1 className="title">Women's World Soccer Matches</h1>
      </article>
    </main>
  )
}

class App extends Component  {
  render() {
    return (
      <div className="container">
        <Title />
        <FifaCodeInput isLoading={this.props.matchData.isLoading} />
        <FifaMatchResults matchData={this.props.matchData} />
      </div>

    )
  }
}


function mapStateToProps(state) {
  return { matchData: state.matchData }
}

export default connect(mapStateToProps)(App);
