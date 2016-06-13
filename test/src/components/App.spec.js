import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../../../src/components/App';
import Wheel from '../../../src/components/Wheel';
import Button from '../../../src/components/Button';

describe('App', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it('should be defined', function() {
		expect(wrapper).to.exist;	
	});

	it('should have a base class', function() {
		expect(wrapper.hasClass('app-simpsons-carousel')).to.equal(true);
	});

	it('should render a Wheel component', function() {
		expect(wrapper.find(Wheel)).to.have.length(1);
	});

	it('should render Wheel with a correct items prop', function() {
		const items = wrapper.find(Wheel).prop('items');

		expect(items).to.exist;
		expect(items).to.be.an('array');
		expect(items.length).to.be.at.least(1);
		expect(items[0]).to.be.a('string');
	});

	it('should render a Button component', function() {
		expect(wrapper.find(Button)).to.have.length(1);
	});

	it('should render Button with a correct max prop', function() {
		const max = wrapper.find(Button).prop('max');

		expect(max).to.exist;
		expect(max).to.be.a('number');
	});
});