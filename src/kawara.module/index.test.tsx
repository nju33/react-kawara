import React from 'react';
import {shallow} from 'enzyme';

describe('<div id="test">Hello Test</div>', () => {
  it('test div element', () => {
    const wrapper = shallow(<div id="test">Hello Test</div>);
    expect(wrapper.find('#test')).toHaveLength(1);
    expect(wrapper.find('#test').text()).toBe('Hello Test');
  });
});
