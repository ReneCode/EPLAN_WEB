app = angular.module('eplanApp');
app.controller('IoTController', function ($scope, $http, $filter, eplanUtility) {
  var URL_ROOT = eplanUtility.getApiHost();

  setDateToToday();
  showAll();

  function setDateToToday() {
    $scope.date = ""; // $filter('date')(new Date(), 'dd.MM.yyyy'); 
  }



  function showChart(dataPoints) {
      var chart = new CanvasJS.Chart("chartContainer", {
	    	title:{
		    	text: "Light Graph"              
		    },
            axisX:{      
                valueFormatString: "HH:mm",
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
    }


  function showAll() {
    var filter = "";
    var qUser = "";

    var params = {
      source: "esp8266",
      limit: 5000
    };

    if ($scope.date) {
      var aTok = $scope.date.split('.');
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
      params.date = date;
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
                    text: "My First Chart in CanvasJS"              
                },
                data: [              
                    {
                        // Change type to "doughnut", "line", "splineArea", etc.
                        type: "column",
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

