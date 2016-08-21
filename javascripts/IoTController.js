app = angular.module('eplanApp');
app.controller('IoTController', function ($scope, $http, $filter, DateTimeService, eplanUtility) {
  var URL_ROOT = eplanUtility.getApiHost();

  setDateToToday();
  showAll();

  function setDateToToday() {
    $scope.date = $filter('date')(new Date(), 'dd.MM.yyyy'); 
  }

  function showAll() {
    var filter = "";
    var qUser = "";

    var params = {
      source: "esp8266",
      limit: 5000
    };

    if ($scope.date) {
      params.date = DateTimeService.parseGermanDateTime($scope.date);
    }

    var url = URL_ROOT + "/logging";
    var config = {
      params: params
    };

    var that = this;
    $http.get(url, config)
        .then(function(response) {
            var dataPoints = [];
            response.data.forEach( function(d) {
                dataPoints.push( {x: new Date(d.date), y: parseInt(d.text) });
            });
            var chart = new CanvasJS.Chart("chartContainer", {
                title:{
                    text: "Light-Chart"              
                },
                axisX:{      
                    valueFormatString: "D.M. HH:mm",
                    labelAngle: -50
                },                
                data: [              
                    {
                        // Change type to "doughnut", "line", "splineArea", etc.
                        type: "line",
                        dataPoints: dataPoints 
                    }
                ]
            });
            chart.render();            

//        $scope.lights = response.data;
      });
    }

    $scope.showChart = function() {
      showAll();
    };


});

