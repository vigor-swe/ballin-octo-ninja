'use strict';

/* Controllers */


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];

function NavCtrl($scope) {
	$scope.items = ['view1', 'view2'];
	$scope.selected = $scope.items[0];

	$scope.select = function(item) {
		$scope.selected = item;
	}
}
