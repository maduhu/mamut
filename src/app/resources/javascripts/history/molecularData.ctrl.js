'use strict';

angular.module('app.controllers.molecularData',[])
.controller('MolecularDataCtrl', ['$scope','referenceFactory', 'ancillaryDataFactory','molecularDataFactory', function($scope,referenceFactory,ancillaryDataFactory,molecularDataFactory) {
	
	var molecularDataFactory = new molecularDataFactory();
	$scope.molecularDataAtomizedType = molecularDataFactory.molecularDataAtomizedType;
	$scope.formData.molecularData = molecularDataFactory.molecularData;
	
	//Ancillary
	var ancillaryDataFactory = new ancillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactory.ancillaryData;
	
	//reference
	var referenceFactory = new referenceFactory();
	$scope.reference = referenceFactory.reference;
	
	//Local variables for reset objects
	var origMD = angular.copy($scope.molecularDataAtomizedType);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addMolecularDataAtomizedType = function(molecularDataAtomizedType, molecular) {
		if (molecular.measurementOrFact.measurementType !== '') {
			molecularDataAtomizedType.push(molecular);
			$scope.molecularDataAtomizedType = origMD;
			origMD = angular.copy($scope.molecularDataAtomizedType);

		}
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			ancillaryDataFactory.addTo(ancillaryDataList,ancillaryData);
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactory.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactory.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactory.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
	};
}]);