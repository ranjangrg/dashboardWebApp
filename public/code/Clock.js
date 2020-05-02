function displayClock() {
	let dateObj = new Date();
	let timeNow = dateObj.toLocaleTimeString(
			navigator.language, {
				hour: '2-digit',
				minute: '2-digit'
			}
		);
	return timeNow;
}

function changeClockInNotification() {
	let elem = document.getElementById("notif-content");
	elem.innerText = displayClock();
}

//setInterval('displayClock()', 1000);

document.addEventListener('DOMContentLoaded', function(event) {
	changeClockInNotification();
	const interval = 5000;
	setInterval('changeClockInNotification()', interval);
});
