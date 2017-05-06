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

});
