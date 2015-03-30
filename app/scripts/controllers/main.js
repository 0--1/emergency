'use strict';

angular.module('myApp')
	.controller('MainCtrl', ['$scope', 'UserModel', 'AuthModel', function ($scope, UserModel, AuthModel) {
		AuthModel.login('behroozkamali@yahoo.com', 'kamali');
		UserModel.getUser(20).then(function(user) {console.log(user);});
	}]);
