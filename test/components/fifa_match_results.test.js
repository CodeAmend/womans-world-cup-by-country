import { renderComponent , expect } from '../test_helper';
import FifaMatchResults from '../../src/components/fifa_match_results';


describe("FifaMatchResults" , () => {

  let component;
  let props;

  const makeComponent = ( isLoading, data = [] ) => {
    const props = { matchData: { isLoading, data } }
    component = renderComponent(FifaMatchResults, props);
  }

  it("Normal state: has class no-data", () => {
    makeComponent(false)
    expect(component).to.have.class('no-data');
  });

  it("Fetch state: has class loading", () => {
    makeComponent(true)
    expect(component).to.have.class('loading');
  });

  it("Recieve state: has class match-results", () => {
    makeComponent(false, [{ location: 'Brazil' }] )
    expect(component).to.have.class('match-results');
  });

  it("Render state: has class mutiple match-result classes", () => {
    makeComponent(false, [{ location: 'Brazil' }, { location: 'France' }] )
    // expect(component).to.have.class('match-result');
    expect(component.find('.match-result')).to.exist;
  });

});
