app = angular.module('eplanApp');
app.controller('ProcessActionController', function ($scope, ProcessService, eplanUtility, $http, $filter) {
  var URL_ROOT = eplanUtility.getApiHost();

  clearInput();
  showActions();

  $scope.addAction = function() {
    addAction();
  };

  function showActions() {
    var url = URL_ROOT + '/process/action';

    $http.get(url)
      .then(function(response) {
        $scope.actions = response.data;
      });
  }

  function clearInput() {
    $scope.user_name = "";
    $scope.action = "";
    $scope.parameter = "";
    $scope.start_at = $filter('date')(new Date(), 'dd.MM.yyyy HH:mm'); 
  }

  function addAction() {
    if ($scope.user_name  &&  $scope.action) {
      var sendData = {
        user_name: $scope.user_name,
        action: $scope.action,
        parameter: $scope.parameter
      };
      if ($scope.start_at) {
        sendData.start_at = ProcessService.parseGermanDateTime($scope.start_at);
      }
      else {
        sendData.start_at = new Date();
      }

      var url = URL_ROOT + '/process/action';

      $http.post(url, sendData)
        .then(function(response) {
          clearInput();
          showActions();
        });
    }
    
  }



});

