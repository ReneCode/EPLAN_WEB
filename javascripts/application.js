var eplanApp = angular.module('eplanApp', ['ui.router', 'ui.bootstrap']);



eplanApp.directive('partRow', function() {
  return {
    templateUrl: 'templates/part-row-template.html'
  }
})


eplanApp.run([ '$state', function($state) {
  // start with state: index
  $state.transitionTo('index');
}

]);


eplanApp.config(function($stateProvider) {
  $stateProvider
    .state('index', {
      url: "index",
      views: {
        "index": {
          templateUrl: 'partials/part-list.html',
          controller: 'PartListController'
        }
      }
    })
    .state('edit', {
      url: "edit/:id",
      views: {
        "index": {
          templateUrl: 'partials/part-edit.html',
          controller: 'PartEditController'
        }
      }
    })
    .state('edit.technical', {
      parent: 'edit',
      views: {
        "editcontent": {
          templateUrl: 'partials/part-edit-technical.html',
        }
      }
    })
    .state('edit.common', {
      parent: 'edit',
      views: {
        "editcontent": {
          templateUrl: 'partials/part-edit-common.html',

        }
      }
    });

});

