import React, {Component} from 'react';
import _ from 'lodash';

class FifaMatchResults extends Component {

  renderMatchResults() {
    return this.props.matchData.data.map((match) => {
      return (
          <section key={match.match_number} className="match-result level">
            <article className="level-item has-text-right">
              <section className="home-result">
                <p className="heading">{match.home_team.country}</p>
                <p className="title">{match.home_team.goals}</p>
              </section>
            </article>
            <p>VS</p>
            <article className="level-item has-text-left">
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

    const { isLoading, data } = this.props.matchData;

    if (isLoading) return (<div className='loading'>LOADING...</div>)
    if (data.length === 0) return (<div className='no-data'>No Data...</div>)

    return (
      <ul className="match-results">
        {this.renderMatchResults()}
      </ul>
    )
  }
}

export default FifaMatchResults;
