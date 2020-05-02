import React, { Component } from 'react';

const styles = {
	footer: {
		position: 'fixed',
		bottom: '0',
		left: '20%',
		textAlign: 'center',
		width: '60%'
	},
	dashboard: {
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		backgroundColor: 'rgba(153, 204, 255, 0.3)',
		borderRadius: '4%',
		height: '100%',
		width: '100%',
		margin: 'auto',
		alignItems: 'center'
	}
};

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = this.props.updateDashboardState();
	}
	updateState = (rootState) => { this.setState(rootState); }
	getFooterStyle() { return styles.footer; }
	getDashboardStyle() { return styles.dashboard; }
	toggleMainContent() { console.log('Button pressed'); }
	updateRootState = (_dispMode) => { 
		let _currApp = this.state.currentApp;
		this.setState({
			currentMode: _dispMode,
			currentApp: _currApp
		});
		this.props.updateRootState(this.state);	
	}
	render() {
		return (
			<div id="dash-div" style={this.getFooterStyle()}> 
				<div style={this.getDashboardStyle()}>
					<i className="fa fa-phone fa-4x" title="Phone" onClick={
						this.updateRootState.bind(this, 'list')
					}></i>
					<i className="fa fa-home fa-4x" title="Home" onClick={
						this.updateRootState.bind(this, 'list')
					}></i>
					<i className="fa fa-info-circle fa-4x" title="Information" onClick={
						this.toggleMainContent
					}></i>
				</div>
			</div>
		);
	}
}
export default Dashboard;
