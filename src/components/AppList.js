import React, { Component } from 'react';
import apps from './appData.js';

const styles = {
	appList: {
		display: 'grid',
		gridGap: '2%',
		gridTemplateColumns: 'repeat(4, 1fr)',
		backgroundColor: 'rgba(153, 204, 255, 0.1)',
		borderRadius: '4%',
		paddingTop: '2%'
	},
	appBox: {
		textAlign: 'center',
		padding: '2% 2% 2% 2%'
	},
	appIcon: {
		minWidth: '70%',
		maxWidth: '70%',
		minHeight: '70%',
		maxHeight: '70%'
	},
	appTitle: {
		display: 'inline-block',
		minWidth: '100%',
		maxWidth: '100%',
		minHeight: '15%',
		maxHeight: '15%',
		textShadow: '2px 2px 4px #000000',
		fontFamily: 'sans-serif',
		fontSize: '16px',
		cursor: 'default',
		paddingBottom: '15%'
	},
};

class AppList extends Component {
	state = {
		currentMode: 'list',
		currentApp: {}
	}
	updateState = (rootState) => { this.setState(rootState); }
	getAppListStyle() { return styles.appList; }
	getAppBoxStyle() { return styles.appBox; }
	getAppIconStyle() { return styles.appIcon; }
	getAppTitleStyle() { return styles.appTitle; }
	updateBodyState = (appJSON) => {
		let newState = {
			currentMode: 'app',
			currentApp: appJSON
		};
		this.setState(newState);
		this.props.updateBodyState(newState);
	}
	render() {
		return (
			<div className="app-list" style={this.getAppListStyle()}>
				{apps.map((app) => (
					<div key={'app-'+app.id}>
						<div id={'link-'+app.id}>
							<img 
								id={'img-'+app.id}
								style={this.getAppIconStyle()}
								src={app.icon} 
								title={app.title} 
								alt={app.title}
								onClick={this.updateBodyState.bind(this, app)}
							/> 
						</div>
						<div 
							id={'apptitle-'+app.id}
							className="app-title" 
							style={this.getAppTitleStyle()}
						> 
							{app.title} 
						</div> 
					</div>
				))}
			</div>
		);
	}
}

export default AppList;