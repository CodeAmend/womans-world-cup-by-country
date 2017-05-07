const { LOADING_DATA } = require('../actions/index')

const defaultState = {
    isLoading: false,
    data: []
};

const FetchMatchData = (state = defaultState, action) => {

    switch (action.type) {
      case LOADING_DATA:
        state.isLoading = true;
        return [...state]

      default:
        return state;

    }

}

export default FetchMatchData;
