app = angular.module('eplanApp');
app.controller('ProcessTraceController', function ($scope, $http, $filter, eplanUtility) {
  var URL_ROOT = eplanUtility.getApiHost();

  setDateToToday();
  showProcesses();

  function setDateToToday() {
    $scope.start_at = $filter('date')(new Date(), 'dd.MM.yyyy'); 
  }


  function showProcesses() {
    var filter = "";
    var qUser = "";

    var params = {
      process_name: $scope.process_name,
      user_name: $scope.user_name,
    };

    if ($scope.start_at) {
      var aTok = $scope.start_at.split('.');
      var date = new Date();
      if (aTok.length > 0) {
        date.setDate( aTok[0] );
      }
      if (aTok.length > 1) {
        date.setMonth( aTok[1] -1 );
      }
      if (aTok.length > 2) {
        date.setYear( aTok[2] );
      }
      params.start_at = date;
    }

    var url = URL_ROOT + "/process";
    var config = {
      params: params
    };

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

    $scope.killProcess = function(id, user_name) {
      if (user_name  &&  id) {
        var sendData = {
          user_name: user_name,
          action: 'kill',
          parameter: id
        };
        sendData.start_at = new Date();

        var url = URL_ROOT + '/process/action';

        $http.post(url, sendData)
          .then(function(response) {
            console.log("kill:" + id + "/" + user_name);

          });
      }
    };
});

