import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../../../src/components/App';

describe('App', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it('should be defined', function() {
		expect(wrapper).to.exist;	
	});
});