export const LOADING_DATA = 'LOADING_DATA';

const fetchMatchData = (fifaCountryCode) => {
  return {
    type: LOADING_DATA,
    fifaCode: fifaCountryCode
  }

}

export default fetchMatchData;
