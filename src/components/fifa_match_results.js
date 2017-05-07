import React, {Component} from 'react';
import _ from 'lodash';

class FifaMatchResults extends Component {

  render() {

    const { isLoading, data } = this.props.matchData;

    if (isLoading) return (<div className='loading'>LOADING...</div>)
    if (data.length === 0) return (<div className='no-data'>No Data...</div>)

  }
}

export default FifaMatchResults;
