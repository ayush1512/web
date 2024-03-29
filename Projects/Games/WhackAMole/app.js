//
// Variables
//

var timer, moles;

//
// Methods
//

/**
 * Get a random integer with a minimum and maximum value
 * @param  {Integer} min  The minimum value
 * @param  {Integer} max  The maximum value
 * @return {Integer}      A random number
 */
var randomNumber = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

var getMoleNumber = function (props) {
	if (props.seconds < 10) return randomNumber(2, 3);
	if (props.seconds < 20) return randomNumber(1, 2);
	return 1;
};

var getMoleLocations = function (props) {
	var num = getMoleNumber(props);
	var locations = [];
	for (var i = 0; i < num; i++) {
		locations.push(randomNumber(0, props.holes - 1));
	}
	return locations;
};

var getMole = function (id) {
	return `
		<button class="mole" data-mole="${id}">
			'<svg height="1em" width="0.928571429em" viewBox="0 0 98 91" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero"><path d="M95.8 69.9c-.7-1.4-1.5-2.7-2.4-3.8.7-6.8-1.8-11.9-7.8-16.3-.2-5.2-1.2-10.9-2.9-17.2-6-22.1-16.3-32-33.6-32s-27.6 9.9-33.6 32c-1.7 6.2-2.6 11.9-2.8 16.9v-.1C6 54.1 3.5 59.5 4.6 67c-.6.9-1.1 1.8-1.7 2.8-2.5 5-2.7 9.1-.8 12.3 1 1.6 2.4 2.8 4.3 3.7-.5 1.4-.9 2.7-1.1 3.5l3.9.8c.1-.6.5-1.7.9-3 1.9.5 4.1.8 6.6.9v3h4v-3c2.5 0 4.7-.2 6.6-.6.4 1.1.7 2.1.8 2.6l3.9-.8c-.1-.7-.4-1.6-.8-2.7 2.8-1 4.9-2.5 6.1-4.5.2-.2.3-.5.4-.8 3.4.2 7.2.3 11.3.3 4.2 0 8.1-.1 11.6-.3.1.3.2.5.4.8 1.1 1.8 2.9 3.2 5.4 4.2-.4 1.2-.8 2.3-.9 3l3.9.8c.1-.5.4-1.6.8-2.7 1.9.4 4.1.6 6.6.7v3h4v-3c2.5-.1 4.8-.3 6.7-.7.4 1.2.7 2.2.9 2.8l3.9-.8c-.2-.7-.5-1.9-1-3.2 2.3-1 4-2.3 5.1-4.1 2.1-3 1.8-7.1-.6-12.1zM19.5 33.6C25 13.2 33.9 4.5 49.2 4.5c15.3 0 24.2 8.7 29.7 29.1 2.9 10.7 3.5 19.5 1.9 26.3-.6 0-1.3-.1-2-.1-6.3 0-10.9 1.8-14.2 5.7-4.4-2.4-9.6-3.7-15.4-3.7-5.7 0-11 1.3-15.3 3.7-3.3-3.9-7.8-5.7-14.1-5.7-.8 0-1.6 0-2.3.1-1.5-6.8-.9-15.6 2-26.3zM34.1 80c-.7 1.2-2.1 2.1-4 2.8-.4-1.3-.9-2.5-1-3.1l-3.9.9c.2.7.5 1.8 1 3.2-1.6.2-3.3.4-5.3.4V81h-4v3.2c-2-.1-3.8-.3-5.3-.7.4-1.2.7-2.2.9-2.8l-3.9-.9c-.1.5-.4 1.3-.7 2.3-1-.6-1.8-1.2-2.3-2-1.2-1.9-.9-4.7.9-8.4 2.7-5.5 6.6-7.8 13.3-7.8 6.7 0 10.6 2.3 13.3 7.8 1.9 3.6 2.2 6.4 1 8.3zm59 0c-.6 1-1.6 1.7-3 2.4-.4-1.1-.7-2.2-.8-2.7l-3.9.9c.1.7.5 1.7.9 3-1.6.3-3.4.5-5.4.6V81h-4v3.2c-2-.1-3.7-.2-5.3-.5.4-1.3.8-2.3.9-3l-3.9-.9c-.1.5-.5 1.6-.9 2.8-1.5-.7-2.6-1.5-3.3-2.5-1.2-1.9-.9-4.7.9-8.4 2.7-5.5 6.6-7.8 13.3-7.8 6.7 0 10.6 2.3 13.3 7.8 2.1 3.6 2.4 6.4 1.2 8.3z"/><path d="M60.8 22.6c1 0 1.9.1 2.6.4l1.4-3.7c-1.2-.4-2.6-.7-4-.7-4.6 0-7.7 2.4-7.7 5.8h4c0-1.1 1.9-1.8 3.7-1.8zM37.8 22.6c2.3 0 4.1.8 4.1 1.8h4c0-3.4-3.3-5.8-8.1-5.8-1.8 0-3.4.3-4.7.9l1.7 3.6c.8-.3 1.9-.5 3-.5zM38.3 34.1c0 3.9 5 7.9 8.7 9.2-.7 1.6-2.8 2.2-4.7 2.2-1.2 0-2.3-.2-3.2-.6l-1.6 3.7c1.4.6 3.1 1 4.8 1 2.9 0 5.3-.9 6.9-2.5 1.6 1.5 4 2.5 6.9 2.5 2 0 3.9-.5 5.4-1.4l-2-3.4c-.9.5-2.1.8-3.4.8-1.9 0-4-.6-4.7-2.3 3.6-1.3 8.5-5.2 8.5-9.1 0-5.5-6.7-5.5-10.8-5.5-4.1 0-10.8-.1-10.8 5.4z"/><path d="M49.3 58.6c10.4 0 18-6.3 18-15 0-2.9-.8-5.5-2.3-7.8L61.7 38c1.1 1.6 1.6 3.5 1.6 5.5 0 7.5-7.3 11-14 11s-14-3.4-14-11c0-2.1.5-3.9 1.6-5.5l-3.3-2.2c-1.5 2.3-2.3 4.9-2.3 7.8 0 8.7 7.6 15 18 15z"/></g></svg>
		</button>`;
};

var hasMole = function (moles, index) {
	if (!moles) return false;
	return moles.indexOf(index) > -1;
};

var getStats = function (props) {
	return `
		<div id="stats">
			<div id="score">${props.caught} moles</div>
			<div id="timer">${props.seconds} seconds</div>
		</div>`;
};

var getMoleHoles = function (props) {
	var html = '';
	for (var i = 0; i < props.holes; i++) {
		html += `<div id="plot${i}" class="plot">${hasMole(props.moles, i) ? getMole(i) : '<span class="hole"></span>'}</div>`;
	}
	return html;
};

var getField = function (props) {
	return `
		<div class="field">
			${getMoleHoles(props)}
		</div>`;
};

var app = new Reef('#app', {
	data: {
		gameState: 'new',
		holes: 9,
		moles: null,
		caught: 0,
		seconds: 25,
	},
	template: function (props) {

		// Create HTML string
		var html = '';

		// If game being played or not
		if (props.gameState === 'playing') {
			return getStats(props) + getField(props);
		} else {
			return getStats(props) +
				`<button id="start-game">${props.gameState === 'new' ? 'Start the Game' : 'Play Again'}</button>`;
		}
	}
});

var stopMoles = function () {
	clearTimeout(moles);
};

var hideMoles = function () {
	moles = setTimeout(function () {
		app.setData({
			moles: null
		});
		showMoles();
	}, randomNumber(1500, 3500));
};

var showMoles = function () {
	moles = setTimeout(function () {
		app.setData({
			moles: getMoleLocations(app.getData())
		});
		hideMoles();
	}, randomNumber(100, 300));
};

var stopTimer = function () {
	clearInterval(timer);
};

var startTimer = function () {
	timer = setInterval(function () {

		// Update the UI
		var seconds = app.getData().seconds - 1;
		app.setData({
			seconds: seconds
		});

		// If there's no time left, end the game
		if (seconds === 0) {
			endGame();
		}

	}, 1000);
};

var endGame = function () {
	stopTimer();
	stopMoles();
	app.setData({
		gameState: 'gameover'
	});
};

var startGame = function (event) {
	if (event.target.id !== 'start-game') return;
	app.setData({
		gameState: 'playing',
		moles: 0,
		seconds: 25
	});
	startTimer();
	showMoles();
};

var whackMole = function (event) {
	if (!event.target.classList.contains('mole')) return;
	var data = app.getData();
	data.moles.splice(data.moles.indexOf(parseFloat(event.target.getAttribute('data-mole'))), 1);
	app.setData({
		caught: data.caught + 1,
		moles: data.moles
	});
};


//
// Inits & Event Listeners
//

document.addEventListener('click', function (event) {
	startGame(event);
	whackMole(event);
});

// Load game into the DOM
app.render();