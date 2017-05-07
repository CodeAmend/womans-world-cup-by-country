const { LOADING_DATA, RECIEVED_DATA } = require('../actions/index')

const defaultState = {
  isLoading: false,
  data: []
};

const FetchMatchData = (state = defaultState, action) => {

    switch (action.type) {

      case LOADING_DATA:
        return Object.assign({}, state, {
          fifaCode: action.fifaCode,
          isLoading: true
        })
      case RECIEVED_DATA:
        return Object.assign({}, state, {
          data: action.payload,
          isLoading: false
        })
      default:
        return state;

    }

}

export default FetchMatchData;
