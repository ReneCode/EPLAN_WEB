
app = angular.module('eplanApp');

app.controller('ModalOkCancelController', function($scope, $uibModalInstance, text) {
	$scope.title = text.title;
	$scope.body = text.body;

	$scope.ok = function() {
		$uibModalInstance.close('ok');
	}

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	}
});



