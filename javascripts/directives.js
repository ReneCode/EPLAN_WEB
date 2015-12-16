
app = angular.module('eplanApp');


eplanApp.directive('partRow', function() {
	return {
		templateUrl: 'templates/part-row-template.html'
	};
});



eplanApp.directive('productGroup', function() {
	return {
		restrict: 'AE',
		templateUrl: 'partials/productgroup.html',
		scope: {
			// directive can have attribute 'onchange'
//			pgId: '@',				// used:  <div ... pg-id="{{part.productgroup}}" ...>
			onChange: '=',		// used:  <div ... on-change="changePG" ...>	
			groupname: '=',
			groupid: '='
		},
		
		controller: function($scope, eplanUtility) {
			$scope.change = function(group){
				$scope.groupid = group.id;
				$scope.groupname = group.name;
				// call that onchange function
				if ($scope.onChange) {
					$scope.onChange(group);
				}
			}


/*
			$scope._init = function() {
				console.log("pgId:", $scope.pgId);
				var initVal = $scope.pgId;
				if (initVal != undefined) {
					var len = $scope.productgroups.length;
				console.log("search for id:", initVal);
					for (var idx=0; idx<len; idx++) {
						if ($scope.productgroups[idx].id == initVal) {
							$scope.currentproductgroup = $scope.productgroups[idx];
							break;
						}
					}
				}
			}
*/
			$scope.productgroups = eplanUtility.getProductGroups();
//			$scope.group = $scope.productgroups[0];
		} // controller:
	};
});

