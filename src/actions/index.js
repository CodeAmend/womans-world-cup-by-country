export const LOADING_DATA = 'LOADING_DATA';

const fetchMatchData = (fifaCountryCode) => {
  return {
    type: LOADING_DATA,
    isLoading: true,
    fifaCode: fifaCountryCode
  }
  // return (dispatch) => {
  //   dispatch({ stuff: 66 })
  // }
}

const fetchMatchDataStarted = (fifaCountryCodes) => {
  return {
    type: LOADING_DATA,
    isLoading: true
  }
}

export default fetchMatchData;
