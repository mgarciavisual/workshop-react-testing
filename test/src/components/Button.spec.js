import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { Button } from '../../../src/components/Button';

describe('Button', function() {
	let wrapper,
		props;

	beforeEach(function() {
		props = {
			max: 6,
			generateRandInfo: sinon.spy()
		};

		wrapper = shallow(<Button {...props} />);	
	});

	it('should be defined', function() {
		expect(wrapper).to.exist;
	});

	it('should have a base class', function() {
		expect(wrapper.hasClass('button red')).to.equal(true);
	});

	it('should call generateRandInfo with random value when clicked', function() {
		wrapper.simulate('click');

		expect(props.generateRandInfo.calledOnce).to.equal(true);

		const args = props.generateRandInfo.lastCall.args[0];
		expect(args).to.be.a('number');
		expect(args).to.be.within(1, props.max);
	});
});