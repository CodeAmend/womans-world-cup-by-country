import { renderComponent , expect } from '../test_helper';
import FifaCodeInput from '../../src/components/fifa_code_input.js';

describe('FifaCodeInput' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(FifaCodeInput);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it("has the correct className: fifa-country-code-input", () => {
    expect(component).to.have.class('fifa-code-input');
  });

  it("has a text input", () => {
    expect(component.find('input[type=text]')).to.exist;
  })

  it("has a button", () => {
    expect(component.find('button[type=submit]')).to.exist;
  })

  describe("Entering some text and submitting", () => {

    beforeEach(() => {
      component.find('input').simulate('change', 'BRA')
    })

    it("shows text that is entered", () => {
      expect(component.find('input')).to.have.value('BRA')
    })

  })

});
