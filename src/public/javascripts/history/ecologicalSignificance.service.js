'use strict';

angular.module('app.services.ecologicalSignificance',[])
.factory('EcologicalSignificanceFactory', function(){
	return function() {
		this.ecologicalSignificance = {
			ecologicalSignificanceAtomized: [],
			ecologicalSignificanceUnstructured: '',
			ancillaryData: []
		};

		this.delete = function(list,ecologicalSignificanceAtomized){
			var index = list.indexOf(ecologicalSignificanceAtomized);
			list.splice(index,1);
		};
	};
});