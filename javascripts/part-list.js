
app = angular.module('eplanApp');

app.controller('PartListController', function($scope, $http, eplanUtility) {
  var URL_ROOT = eplanUtility.getApiHost();
  // default pastList is empty
	$scope.partList = {};
  $scope.filterGroup = eplanUtility.getProductGroups()[0];

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
    if ($scope.filterGroup.id > 0) {
      params.f = 'productgroup:' + $scope.filterGroup.id;
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


  $scope.changePG = function(group){
    $scope.searchText = "";
    $scope.filterGroup = group;
    getParts();
  }

/*
  $scope.change = function(group){
    $scope.searchText = "";
    getParts();
  }
*/
});