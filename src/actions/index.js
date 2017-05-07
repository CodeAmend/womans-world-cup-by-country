const axios = require('axios');

export const LOADING_DATA = 'LOADING_DATA';
export const RECIEVED_DATA = 'RECIEVED_DATA';

const fetchMatchDataLoading = (isLoading) => {
  return {
    type: LOADING_DATA,
    isLoading
  }

}

const fetchMatchDataRecieved = (payload) => {
  return {
    type: RECIEVED_DATA,
    payload
  }

}

const fetchMatchData = (fifaCode) => {
  return (dispatch) => {

    const url = `http://worldcup.sfg.io/matches/country?fifa_code=${fifaCode}`;

    dispatch(fetchMatchDataLoading(true))

    axios.get(url)
      .then((response) => {
        dispatch(fetchMatchDataRecieved(response.data));
      })
      .catch((err) => {
        console.log(err);
      })
  }

}

export default fetchMatchData;
