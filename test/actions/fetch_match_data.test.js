import { expect } from '../test_helper';
import fetchMatchData from '../../src/actions';

describe("Fetch Matches Action", () => {

  it("has correct initial loading type", () => {
    const action = fetchMatchData('')
    expect(action.payload.isLoading).to.be.true;
  })

})
