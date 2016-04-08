'use strict';

angular.module('app.controllers.moreInformation',[])
.controller('MoreInformationCtrl', ['$scope', '$http', function($scope,$http) {
	
	//ADD
	$scope.addMoreInformation = function() {
		var req_1 = {
			method: 'POST',
			url: 'http://192.168.205.191:8080/fichas/'+$scope.formData._id+'/more_information/',
			headers: {
			  'Content-Type': 'application/JSON'
			},
			data: { "id_user" : "01",
				"moreInformation":$scope.formData.moreInformation

			}
		};
		$http(req_1).then(function (response) {
			if(response.status===200){
				alert("Elemento guardado satisfactoriamente!");
			}
        });
	};
}]);