import { renderComponent , expect } from '../test_helper';
import FifaMatchResults from '../../src/components/fifa_match_results';


describe("FifaMatchResults" , () => {

  let component;
  let props = { matchData: { isLoading: false, data: [] } }

  const makeComponent = (props) => {
    component = renderComponent(FifaMatchResults, props);
  }

  it("Normal state: has class no-data", () => {
    makeComponent(props)
    expect(component).to.have.class('no-data');
  });

  it("Fetch state: has class loading", () => {
    props.matchData.isLoading = true;
    makeComponent(props)
    expect(component).to.have.class('loading');
  });

  it("Recieve state: has class match-results", () => {
    props.matchData.isLoading = false;
    props.matchData.data = [
      { location: 'Brazil' }
    ]
    makeComponent(props)
    expect(component).to.have.class('match-results');
  });
  

});
