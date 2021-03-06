'use strict';

angular.module('app.services.environmentalEnvelope',[])
.factory('EnvironmentalEnvelopeFactory', function(){
	return function() {
		this.environmentalEnvelope = {
			environmentalEnvelopeAtomized: [],
			environmentalEnvelopeUnstructured: '',
			ancillaryData: []
		};

		this.delete = function(list,environmentalEnvelopeAtomized){
			var index = list.indexOf(environmentalEnvelopeAtomized);
			list.splice(index,1);
		};
	};
});