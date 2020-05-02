import React, { Component } from 'react';

const styles = {
	notif: {
		textAlign: 'center',
		width: '100%'
		//borderStyle: 'solid'
	}
};

class Notif extends Component {
	constructor(props) {
		super(props);
		this.state = this.props.updateNotificationState();
	}
	getStyle() { return styles.notif; }
	updateState = (rootState) => { this.setState(rootState); }
	changeTitle = () => {
		let title = '';
		if (this.state.currentMode === 'app') {
			title = this.state.currentApp.title;
		}
		return title;
	};
	render() {
		return (
			<div id="notif-div" style={this.getStyle()}> 
				<span id="notif-app-name"> {this.changeTitle()} </span>
				<span id="notif-content"> </span> 
			</div>
		);
	}
}

export default Notif;