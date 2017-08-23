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

  it('should render properly', () => {
    const header = shallow(<Header />);
    //expect(header.find({ prop: 'title' })).to.have.length(1);
    //expect(header.find(<h2/>)).to.have.length(1);
    expect(header.find('div h2').text()).toEqual('Welcome to React JDC Training');
  });

  it('should handle a click event', () => {
      const wrapper = mount(<a>Click Me</a>, {
        context: {color: 'blue'}
      })
      expect(mountToJson(wrapper)).toMatchSnapshot()
  });
});