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

  it("Normal state: has class no-data", () => {
    props.matchData.isLoading = true;
    makeComponent(props)
    expect(component).to.have.class('loading');
  });



});
