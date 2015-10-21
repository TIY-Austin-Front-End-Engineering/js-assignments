angular.module('basic.controllers', ['basic.services'])
.controller('ArrayCtrl', function($scope) {
	$scope.disney = [
		{
			title: 'Toy Story 3',
			year: 2010
		},
		{
			title: 'Pirates of the Caribbean: On Stranger Tides',
			year: 2011
		},
		{
			title: 'Winnie the Pooh',
			year: 2011
		},
		{
			title: 'Brave',
			year: 2012
		},
		{
			title: 'Wreck-It Ralph',
			year: 2012
		},
		{
			title: 'Monsters University',
			year: 2013
		},
		{
			title: 'Frozen',
			year: 2013
		},
		{
			title: 'Muppets Most Wanted',
			year: 2014
		},
		{
			title: 'Alexander and the Terrible, Horrible, No Good, Very Bad Day',
			year: 2014
		},
		{
			title: 'Big Hero 6',
			year: 2014
		}
	];

	$scope.names = [
		'Alex',
		'Charlie',
		'Daniel',
		'Erika',
		'Gabe',
		'Hughie',
		'Jacob',
		'Paul',
		'Ryan',
		'Travis'
	];
})
.controller('ObjectCtrl', function($scope) {
	$scope.networks = {
		GitHub: 'http://github.com',
		Facebook: 'http://facebook.com',
		Twitter: 'http://twitter.com',
		Instagram: 'http://instagram.com',
		Pinterest: 'http://pinterest.com',
		Reddit: 'http://reddit.com',
		Yelp: 'http://yelp.com'
	};

	$scope.restaurants = {
		McDonalds: {
			type: 'Fast Food',
			price: '$'
		},
		Subway: {
			type: 'Fast Food',
			price: '$'
		},
		'Torchy\'s Tacos': {
			type: 'Tex Mex',
			price: '$'
		},
		'South Congress Cafe': {
			type: 'Breakfast & Brunch',
			price: '$$'
		},
		Uchi: {
			type: 'Sushi Bar',
			price: '$$$$'
		}
	};
});
