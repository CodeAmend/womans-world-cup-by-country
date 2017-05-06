import { expect } from '../test_helper';
import { FETCH_MATCHES, fetchMatches } from '../../src/actions';

describe("Fetch Matches Action", () => {

  it("has correct type", () => {
    const action = fetchMatches('')
    expect(action.type).to.equal(FETCH_MATCHES)
  })

})
