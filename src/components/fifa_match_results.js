import React, {Component} from 'react';
import _ from 'lodash';

class FifaMatchResults extends Component {

  renderMatchResults() {
    return this.props.matchData.data.map((match) => {
      return (
        <li
          key={match.match_number}
          className="match-result">{ match.location }>
        </li>
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
