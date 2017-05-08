// Action State CONTSTANTS
const { LOADING_DATA, RECIEVED_DATA, REQUEST_ERROR } = require('../actions/index')

// Default State Object
const defaultState = { isLoading: false, data: [] };


// Actions for FetchData - set defaultState object
const FetchMatchData = (state=defaultState, action) => {

    switch (action.type) {

      // API Request in Loading status
      case LOADING_DATA:
        return Object.assign({}, state, {
          fifaCode: action.fifaCode,
          isLoading: true
        })

      // API request was a success
      case RECIEVED_DATA:
        return Object.assign({}, state, {
          data: action.payload,
          isLoading: false,
          error: null
        })

      // API request failure
      case REQUEST_ERROR:
        return Object.assign({}, state, {
          // Create error object with message and fifaCode
          error: parseError(action.errorMessage, action.fifaCode),
          // Clear data
          data: [],
          // Stop Loading
          isLoading: false,
        })
      default:
        return state;

    }

    function parseError(errorMessage, fifaCode) {
      const error = {
        serverMessage: errorMessage,
        formError: ''
      }

      if (fifaCode.length > 3 || fifaCode.length < 3)
        error.formError = 'A country code has a length of 3.';
      if (fifaCode.match(/^[A-Za-z]{3}$/))
        error.formError = `${fifaCode} is not a valid country code.`;

      console.log(error);
      return error;
    }
}

export default FetchMatchData;
