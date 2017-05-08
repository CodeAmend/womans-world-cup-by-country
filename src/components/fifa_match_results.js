// Modules
import React, {Component} from 'react';


class FifaMatchResults extends Component {

  renderMatchResults() {
    return this.props.matchData.data.map((match) => {
      return (
          <section key={match.match_number} className="match-result is-full-width columns">
            <article className="columm has-text-centered">
              <section className="home-result">
                <p className="heading">{match.home_team.country}</p>
                <p className="title">{match.home_team.goals}</p>
              </section>
            </article>
            <article className="column has-text-centered">
              <p className="has-text-centered"><strong>VS</strong></p>
            </article>
            <article className="column has-text-centered">
              <section className="away-result">
                <p className="heading">{match.away_team.country}</p>
                <p className="title">{match.away_team.goals}</p>
              </section>
            </article>
          </section>
      )
    })
  }

  render() {

    const { isLoading, data, error } = this.props.matchData;

    if (error) {
      return (
        <div className="has-text-centered">
          <h5>{error.serverMessage}</h5>
          <p>{error.formError}</p>
        </div>
      )
    }

    if (isLoading) return (<div className="loading has-text-centered">LOADING...</div>)
    if (data.length === 0) return (<div className="no-data has-text-centered">No Data...</div>)
    return (
      <ul className="match-results">
        {this.renderMatchResults()}
      </ul>
    )
  }
}

export default FifaMatchResults;
