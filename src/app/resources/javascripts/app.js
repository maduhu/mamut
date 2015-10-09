'use strict';

// create our angular app and inject ngAnimate and ui-router
// =======================================================================================
angular.module('formApp', 
	['ng', 'ngCookies', 'ngSanitize', 'pascalprecht.translate', 'ui.directives','ui.filters', 'ui.router','ui.bootstrap','ngAnimate','ngFileUpload', 'angularModalService', 
	'app.controllers.form','app.controllers.checkBox', 'app.controllers.collapse','app.controllers.findLanguageName','app.controllers.ubicacion','app.routes','app.routes.translate',
	'app.controllers.reference' ,'app.services.reference',
	'app.controllers.ancillary' ,'app.services.ancillary',
	'app.controllers.measurement', 'app.services.measurement', 
	'app.controllers.commonName' ,'app.services.commonName',
	'app.controllers.synonmy' ,'app.services.synonmy',
	'app.controllers.hierarchy' ,'app.services.hierarchy',
	'app.controllers.abstract',
	'app.controllers.briefDescription',
	'app.controllers.fullDescription', 'app.services.fullDescription',
	'app.controllers.identificationKeys', 'app.services.identificationKeys',
	'app.controllers.lifeForm', 'app.services.lifeForm',
	'app.controllers.lifeCycle', 'app.services.lifeCycle',
	'app.controllers.reproduction', 'app.services.reproduction',
	'app.controllers.annualCycle', 'app.services.annualCycle',
	'app.controllers.feeding', 'app.services.feeding',
	'app.controllers.dispersal', 'app.services.dispersal',
	'app.controllers.behavior', 'app.services.behavior',
	'app.controllers.interactions', 'app.services.interactions',
	'app.controllers.molecularData', 'app.services.molecularData',
	'app.controllers.migratory', 'app.services.migratory',
	'app.controllers.environmentalEnvelope', 'app.services.environmentalEnvelope',
	'app.controllers.ecologicalSignificance', 'app.services.ecologicalSignificance',
	'app.controllers.invasiveness', 'app.services.invasiveness',
	'app.controllers.habitat', 'app.services.habitat',
	'app.controllers.distribution', 'app.services.distribution',
	'app.controllers.endemic', 'app.services.endemic',
	'app.controllers.territory', 'app.services.territory',
	'app.controllers.populationBiology', 'app.services.populationBiology',
	'app.controllers.threatStatus', 'app.services.threatStatus',
	'app.controllers.directThreats', 'app.services.directThreats',
	'app.controllers.legislation', 'app.services.legislation',
	'app.controllers.use', 'app.services.use',
	'app.controllers.managementAndConservation', 'app.services.managementAndConservation',
	'app.controllers.associatedParty', 'app.services.associatedParty'						
	]);
