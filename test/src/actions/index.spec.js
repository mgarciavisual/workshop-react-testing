import { expect } from 'chai';

import { GENERATE_RANDINFO } from '../../../src/actions/types';
import { generateRandInfo } from '../../../src/actions';

describe('Actions', function() {
	describe('generateRandInfo', function() {
		it('should generate an action with correct type', function() {
			const action = generateRandInfo(3);

			expect(action.type).to.equal(GENERATE_RANDINFO);
		});

		it('should generate an action with correct payload', function() {
			const action = generateRandInfo(3);

			expect(action.payload).to.be.an('object');
			expect(action.payload).to.have.keys(['value', 'timestamp']);
			expect(action.payload.value).to.equal(3);
			expect(action.payload.timestamp).to.be.a('number');
		});
	});
});