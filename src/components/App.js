import React, { Component } from 'react';
/* Importing All Apps */
import ClockApp from './Apps/ClockApp';
import GalleryApp from './Apps/GalleryApp';
import SettingsApp from './Apps/SettingsApp';
import CameraApp from './Apps/CameraApp';
import StoreApp from './Apps/StoreApp';
import HealthApp from './Apps/HealthApp';
import FacebookApp from './Apps/FacebookApp';
import ViberApp from './Apps/ViberApp';

/* List of App info*/
//import apps from './appData.js';

// contains respective Elements with their string names
// Used to parse React.element via string
const appComponents = {
	'00': (<ClockApp />), //ClockApp: (<ClockApp />),
	'01': (<GalleryApp />), //GalleryApp: (<GalleryApp />),
	'02': (<SettingsApp />), //SettingsApp: (<SettingsApp />),
	'03': (<CameraApp />), //CameraApp: (<CameraApp />),
	'04': (<StoreApp />), //StoreApp: (<StoreApp />),
	'05': (<HealthApp />), //HealthApp: (<HealthApp />),
	'09': (<FacebookApp />), //FacebookApp: (<FacebookApp />),
	'10': (<ViberApp />) //ViberApp: (<ViberApp />)
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = this.props.updateAppState();  
	}
	updateState = (newState) => { this.setState(newState); }
	parseCurrentAppToElement() {
		// returns <ClockApp /> from 'ClockApp'
		let _currApp = this.state.currentApp;
		return (appComponents[_currApp.id]) ? appComponents[_currApp.id] : _currApp.appName + ' not found.';
	}
	render() {
		let currAppComponent = this.parseCurrentAppToElement();
		return ( <div className="app-content"> {currAppComponent} </div> );
	}
}

export default App;
