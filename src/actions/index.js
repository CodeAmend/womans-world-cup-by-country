const LOADING_DATA = 'LOADING_DATA';

const fetchMatchData = (fifaCountryCodes) => {
  return {
    type: LOADING_DATA,
    payload: { data: [], isLoading: true }
  }
}

export default fetchMatchData;
