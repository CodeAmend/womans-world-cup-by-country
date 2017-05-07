const { LOADING_DATA } = require('../actions/index')

const defaultState = {
  isLoading: false,
  data: []
};

const FetchMatchData = (state = defaultState, action) => {

    switch (action.type) {

      case LOADING_DATA:
        return Object.assign({}, state, {
          isLoading: true,
          fifaCode: action.fifaCode
        })

      default:
        return state;

    }

}

export default FetchMatchData;
