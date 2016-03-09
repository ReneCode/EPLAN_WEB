app = angular.module('eplanApp');
app.controller('ProcessTraceController', function ($scope, $http) {
  showProcesses();

  function showProcesses()
  {
    var filter = "";
    var qUser = "";

    if ($scope.user_name) {
      if (filter) {
        filter = filter + " ";
      }
      filter = filter + "user_name:" + $scope.user_name;
    }
    if ($scope.process_name) {
      if (filter) {
        filter = filter + " ";
      }
      filter = filter + "process_name:" + $scope.process_name;
    }

    var url = "http://api.riffer.eu/process";
    var config = {
      params: {}
    };
    if (filter) {
      config.params.f = filter;
    }
    $http.get(url, config)
      .then(function(response) {
        $scope.processes = response.data;
      });
    }

    $scope.showProcesses = function() {
      showProcesses();
    };
});

