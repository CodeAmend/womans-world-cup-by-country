import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {

  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  // INPUT field
  it('has a input with class fifa-code-input', () => {
    expect(component.find('form')).to.have.class('fifa-code-input');
  })

  describe("Fetch match results from API", () => {

    it("User submits 'BRA' and sees results", () => {

      // Type BRA in input
      component.find('.fifa-code-input input').simulate('change', 'BRA')
      // Submit query
      component.find('.fifa-code-input').simulate('submit')

      // TODO: HOW DO I TEST FOR API RESPONSE!!!

      console.log(component.find('.loading'));
    })

  })
});
