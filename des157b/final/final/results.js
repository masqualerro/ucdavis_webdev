let colorList = [
	['#BA9B7E', '#758383'],
	['#CCC4AD', '#A57D63'],
];

var granimInstance = new Granim({
	element: '#gradient',
	direction: 'left-right',
	isPausedWhenNotInView: true,
	stateTransitionSpeed: 1500,
	states: {
		'default-state': {
			gradients: colorList,
			transitionSpeed: 3000,
		},
	},
});
