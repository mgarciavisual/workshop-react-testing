import { GENERATE_RANDINFO } from './types';

export function generateRandInfo(value) {
	return {
		type: GENERATE_RANDINFO,
		payload: {
			value: value,
			timestamp: new Date().getTime()
		}
	};
}