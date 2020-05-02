import React, { Component } from 'react';
import App from '../App';
import AppList from '../AppList';

const styles = {
	body: {
		textAlign: 'center',
		width: '100%',
		//borderStyle: 'solid'		
	}
};

class Body extends Component {
	constructor(props) {
		super(props);
		this.state = this.props.updateBodyState();
		this.getStyle = () => { return styles.body; }
		this.appElement = React.createRef();
		this.appListElement = React.createRef();
	}
	updateState = (_newState) => { 
		this.setState(_newState); 
		if (this.state.currentMode === 'app') {
			this.appElement.current.updateState(_newState);
		} else if (this.state.currentMode === 'list') {
			this.appListElement.current.updateState(_newState);
		}
	}
	sendBodyState = () => { return this.state; };
	updateRootState = () => { this.props.updateRootState(this.state); };
	render() {
		let elemToAdd = ( <AppList 
				ref={this.appListElement}
				updateBodyState={this.updateState.bind(this)} 
			/> );
		if (this.state.currentMode === 'app') {
			elemToAdd = ( <App 
					ref={this.appElement}
					updateAppState={this.sendBodyState.bind(this)} 
				/> );
		} 
		return (
			<div id="body-div" style={this.getStyle()}> 
				{elemToAdd}
			</div>
		);
	}
}

export default Body;
