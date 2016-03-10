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
        response.data.forEach(function(p) {
          if (p.start_at) {
            var dt = new Date(p.start_at);
            p.till  = new Date(dt.getTime() + p.duration*60000);
          }
        });
        $scope.processes = response.data;
      });
    }

    $scope.showProcesses = function() {
      showProcesses();
    };
});

