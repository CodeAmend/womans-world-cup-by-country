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

});
