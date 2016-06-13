import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { generateRandInfo } from '../actions';

import './Button.scss';

export const Button = function(props) {
	function handleClick() {
		const value = Math.floor(Math.random() * props.max) + 1;

		props.generateRandInfo(value);
	}

	return <div className="button red" onClick={handleClick}/>;
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ generateRandInfo }, dispatch);
}

export default connect(null, mapDispatchToProps)(Button);