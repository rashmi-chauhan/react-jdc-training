import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Header from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
  });

  it('should renders welcome', () => {
    const component = renderer.create(<Header />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
