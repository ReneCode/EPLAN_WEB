
app = angular.module('eplanApp');

app.controller('PartListController', function($scope, $http, eplanUtility) {
  var URL_ROOT = eplanUtility.getApiHost();
  // default pastList is empty
	$scope.partList = {};
  // get Parts without any filter
  getParts();

  $scope.searchParts = function() {
    getParts();
  };

  function getParts() {
    var params = {};
    if ($scope.searchText) {
      params.q = $scope.searchText;
    }
    if ($scope.currentproductgroup  &&  $scope.currentproductgroup.id > 0) {
      params.f = 'productgroup:' + $scope.currentproductgroup.id;
    }
    $http.get(URL_ROOT + '/api/v1/part', {params:params} )
      .then( 
        // success
        function(response) {
          $scope.partList = response.data.data;
        },
        // error
        function(response) {
          console.log("errror >>");
          console.log("data:", response.data);
          console.log("status:", response.status);
          console.log("headers:", response.headers);
          console.log("config:", response.config);
          console.log("statusText:", response.statusText);
        }
      ); 
  }


  $scope.productgroups = eplanUtility.getProductGroups();

  $scope.currentproductgroup = $scope.productgroups[0];

  $scope.change = function(group){
    $scope.currentproductgroup = group;
    $scope.searchText = "";
    getParts();
  }

});