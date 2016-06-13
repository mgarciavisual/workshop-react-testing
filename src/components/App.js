import React, { Component } from 'react';

import Wheel from './Wheel';
import Button from './Button';

import images from '../resources/images';

import './App.scss';

export default class App extends Component {
	render() {
		return (
			<div className="app-simpsons-carousel">
				<Wheel items={images} />
				<Button max={6} />
			</div>
		);
	}
}