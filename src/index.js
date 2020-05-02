import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* Importing all components */
import Notif from './components/layout/Notif';
import Dashboard from './components/layout/Dashboard';
import Body from './components/layout/Body';
import * as serviceWorker from './serviceWorker';

// Root contains all the components
class Root extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentMode: 'list',
			currentApp: {}
		}
		this.bodyElement = React.createRef();
		this.notifElement = React.createRef();
		this.dashboardElement = React.createRef();
	}	
	// updates all the Components' states i.e.
	// notification, body and dashboard states
	updateAll = () => {
		this.bodyElement.current.updateState(this.state);		
		this.notifElement.current.updateState(this.state);
		this.dashboardElement.current.updateState(this.state);
	};
	updateRootState = (newState) => {
		this.setState(newState);
		this.updateAll();
	};
	setCurrentApp = (_currApp) => {
		let currMode = this.state.currentMode;
		this.setState({
			currentMode: currMode,
			currentApp: _currApp
		});
	}
	sendRootState = () => {
		return this.state;
	};
	render() {
		return (
			<React.Fragment>
				{/* notification div */}
				<Notif 
					id="notif-div" 
					ref={this.notifElement}
					updateNotificationState={this.sendRootState.bind(this)}
				/>
				{/* main body/content div */}
				<React.StrictMode>
					<Body 
						ref={this.bodyElement} 
						updateRootState={this.updateRootState.bind(this)}
						updateBodyState={this.sendRootState.bind(this)}
					/>
				</React.StrictMode>
				{/* dashboard div (@bottom) div */}
				<Dashboard 
					ref={this.dashboardElement} 
					updateRootState={this.updateRootState.bind(this)} 
					updateDashboardState={this.sendRootState.bind(this)}
				/>
			</React.Fragment>
		);
	}
}

ReactDOM.render(
	<Root />,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
