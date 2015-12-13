
app = angular.module('eplanApp');

app.controller('PartEditController', function($scope, $http, $state, $stateParams, $uibModal, eplanUtility) {
  var URL_ROOT = eplanUtility.getApiHost();
  // default pastList is empty
  var id = $stateParams.id;

  $scope.showModal = false;

  getPart(id);

  // switch to the common-tab
  $state.go('edit.common');


  function getPart(id) {
    $http.get(URL_ROOT + '/api/v1/part/' + id)
      .then( 
        // success
        function(response) {
          $scope.part = response.data.data;
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


  $scope.savePart = function() {
    // update the part
    $http.put(URL_ROOT + '/api/v1/part/' + $scope.part._id, $scope.part)
      .then(
        // success
        function(response) {
          // back to index page
          $state.go('index');
        }
      );
  }

  $scope.deletePart = function() {
    // see: http://angular-ui.github.io/bootstrap/   Modal
    var modalDialog = $uibModal.open({
      templateUrl: "partials/modal-ok-cancel.html",
      controller: "ModalOkCancelController",
      resolve:  {
        // that is a service for the modal-dialog-controller
        text: function() {
          // obj.title .body for the modal dialog
          return {
            title: "Delete Part",
            body: "Do you really want to delete part: " + $scope.part.partnr + "?" };
        }
      }
    });

    modalDialog.result.then( function(result) {
      // result is the parameter when dialog.close() is called
      $http.delete(URL_ROOT + '/api/v1/part/' + $scope.part._id)
        .then(
          // ok / closed
            function() {
              $state.go('index');
            }
          );
    }, function() {
      // cancel / dialog.dismiss
    });
  }


  // ----------
/*
  for accordion GUI

  $scope.oneAtATime = false;

  $scope.groups = [{
        groupTitle: "Common",
        templateUrl: "partials/part-edit-common.html"
  }, {
        groupTitle: "Technical Data",
        templateUrl: "partials/part-edit-technical.html"
  } ];

  $scope.status = {
    isOpen: new Array($scope.groups.length)
  };

  for (var i = 0; i < $scope.status.isOpen.length; i++) {
        $scope.status.isOpen[i] = (i === 0);
  }
*/
});




