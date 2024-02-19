module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{html,json,png,svg,css,js,txt}'
	],
	swDest: 'build/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};