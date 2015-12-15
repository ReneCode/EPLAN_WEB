
app = angular.module('eplanApp');


eplanApp.directive('partRow', function() {
  return {
    templateUrl: 'templates/part-row-template.html'
  };
});



eplanApp.directive('productgroup', function() {
	return {
		restrict: 'A',
		templateUrl: 'partials/productgroup.html',
		scope: {
			// directive can have attribute 'onchange'
			onchange: '=',
//			value: '='
		},
		controller: function($scope, eplanUtility) {
		  $scope.change = function(group){
		    $scope.currentproductgroup = group;
		    // call that onchange function if set
		    if ($scope.onchange) {
		    	$scope.onchange(group);
		    }
  		}
		  $scope.productgroups = eplanUtility.getProductGroups();

		  $scope.currentproductgroup = $scope.productgroups[0];
//			console.log($scope.value);
/*
  		if ($scope.value) {

  			var len = $scope.productgroups.length;
  			for (var idx=0; idx<len; idx++) {
  			if ($scope.productgroups[idx].id == $scope.value) {
					  $scope.currentproductgroup = $scope.productgroups[idx];
					  break;
  				} 
  			}
  		}
  */		
		}
	};
});

