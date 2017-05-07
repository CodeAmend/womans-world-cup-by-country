const { LOADING_DATA } = require('../actions/index')

const defaultState = {
    isLoading: false,
    data: []
};

const FetchMatchData = (state = defaultState, action) => {
    switch (action.type) {
      case LOADING_DATA:
        return action.payload

      default:
        return state

    }
}

export default FetchMatchData;
