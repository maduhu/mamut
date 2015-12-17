'use strict';

angular.module('app.controllers.upload',[])
.controller('UploadFile', function ($scope) {
    $scope.replaceSC = function(str){
    	var strClean = (str).replace('{','');
    	var strI = ((((strClean).replace(/\\'{\\i/g,"í")).replace(/\\'{I/g,"Í")).replace(/\\'\\i/g,"í")).replace(/\\'\\I/g,"Í");
    	var strO = ((((strI).replace(/\\'{o/g,"ó")).replace(/\\'{O/g,"Ó")).replace(/\\'o/g,"ó")).replace(/\\'O/g,"Ó");
    	var strU = ((((strO).replace(/\\'{u/g,"ú")).replace(/\\'{U/g,"Ú")).replace(/\\'u/g,"ú")).replace(/\\'U/g,"Ú");
    	var strA = ((((strU).replace(/\\'{a/g,"á")).replace(/\\'{A/g,"Á")).replace(/\\'a/g,"á")).replace(/\\'A/g,"Á");
    	var strE = ((((strA).replace(/\\'{e/g,"é")).replace(/\\'{E/g,"É")).replace(/\\'e/g,"é")).replace(/\\'E/g,"É");
    	var strN = ((((strE).replace(/\\~{n/g,"ñ")).replace(/\\~{N/g,"Ñ")).replace(/\\~n/g,"ñ")).replace(/\\~N/g,"Ñ");
    	var strFinal = (strN).replace(/}/g,"");
    	return strFinal;
    };
    $scope.showContent = function($fileContent){
        $scope.content = $fileContent;
        
		var sample = bibtexParse.toJSON($scope.content);

		angular.forEach(sample, function(reference) {
			var skeleton_reference = {
				id: '',
				profile_id: '',
				group_id: '',
				created: '',
				last_modified: '',
				identifiers:[],
				abstract: '',
				tags: '',
				type: '',
				source: '',
				title: '',
				authors:[],
				year: '',
				volume: '',
				issue: '',
				pages: '',
				series: '',
				chapter: '',
				websites: '',
				accessed: '',
				publisher: '',
				address: '',
				edition: '',
				institution: '',
				editors:[],
				keywords:[],
				doi: '',
				isbn: '',
				issn: '',
				link: ''
			};

			skeleton_reference.doi = reference.entryTags.doi;
			skeleton_reference.issn = reference.entryTags.issn;
			skeleton_reference.isbn = reference.entryTags.isbn;
			skeleton_reference.pages = reference.entryTags.pages;
			skeleton_reference.year = reference.entryTags.year;
			skeleton_reference.edition = reference.entryTags.edition;
			skeleton_reference.volume = reference.entryTags.volume;
			skeleton_reference.pages = reference.entryTags.pages;
			skeleton_reference.link = reference.entryTags.url;


			(reference.entryTags.title !== undefined) ? skeleton_reference.title =  $scope.replaceSC(reference.entryTags.title) : skeleton_reference.title = '';
			(reference.entryTags.keywords !== undefined) ? skeleton_reference.keywords = $scope.replaceSC(reference.entryTags.keywords): skeleton_reference.keywords = '';
			(reference.entryTags['mendeley-tags'] !== undefined) ? skeleton_reference.tags = $scope.replaceSC(reference.entryTags['mendeley-tags']) : skeleton_reference.tags = '';
			(reference.entryTags.publisher !== undefined) ? skeleton_reference.publisher =  $scope.replaceSC(reference.entryTags.publisher) : skeleton_reference.publisher = '';
			(reference.entryTags.issue !== undefined) ? skeleton_reference.issue =  $scope.replaceSC(reference.entryTags.annote) : skeleton_reference.issue = '';
			(reference.entryTags.abstract !== undefined) ? skeleton_reference.abstract =  $scope.replaceSC(reference.entryTags.abstract) : skeleton_reference.abstract = '';
			
			
			if(reference.entryTags.author !== undefined ){
				var author = $scope.replaceSC(reference.entryTags.author);
				if((author).indexOf('and') > -1){
					skeleton_reference.authors = (author).split(" and ");
				}else{
					skeleton_reference.authors = [].concat(author);
				}
			}

			if(reference.entryTags.editor !== undefined ){
				var editor = $scope.replaceSC(reference.entryTags.editor);
				if((editor).indexOf('and') > -1){
					skeleton_reference.editors = (editor).split(" and ");
				}else{
					skeleton_reference.editors = [].concat(author);
				}
			}

			switch(reference.entryType){
				case 'book':
					skeleton_reference.type=reference.entryType;
					break;
				case 'misc':
					skeleton_reference.type='miscellany';
					(reference.entryTags.booktitle !== undefined) ? skeleton_reference.source =  $scope.replaceSC(reference.entryTags.booktitle) : skeleton_reference.source = '';
					break;
				case 'incollection':
					skeleton_reference.type='book_section';
					(reference.entryTags.booktitle !== undefined) ? skeleton_reference.source =  $scope.replaceSC(reference.entryTags.booktitle) : skeleton_reference.source = '';
					break;
				case 'article':
					skeleton_reference.type=reference.entryType;
					(reference.entryTags.journal !== undefined) ? skeleton_reference.source =  $scope.replaceSC(reference.entryTags.journal) : skeleton_reference.source = '';
					break;
				case 'phdthesis':
					skeleton_reference.type='thesis';
					(reference.entryTags.school !== undefined) ? skeleton_reference.institution =  $scope.replaceSC(reference.entryTags.school) : skeleton_reference.institution = '';
					break;
				case 'techreport':
					skeleton_reference.type='report';
					(reference.entryTags.institution !== undefined) ? skeleton_reference.institution =  $scope.replaceSC(reference.entryTags.institution) : skeleton_reference.institution = '';
					break;
				case 'inproceedings':
					skeleton_reference.type='conference_proceedings';
					(reference.entryTags.booktitle !== undefined) ? skeleton_reference.source =  $scope.replaceSC(reference.entryTags.booktitle) : skeleton_reference.source = '';
					(reference.entryTags.organization !== undefined) ? skeleton_reference.institution =  $scope.replaceSC(reference.entryTags.organization) : skeleton_reference.institution = '';
					break;
				case 'unpublished':
					skeleton_reference.type='working_paper';
					(reference.entryTags.school !== undefined) ? skeleton_reference.institution =  $scope.replaceSC(reference.entryTags.school) : skeleton_reference.institution = '';
					break;
				default:
					break;
			}
			$scope.formData.references.push(skeleton_reference);
		});
    };
  })

.directive('onReadFile', function ($parse) {
	return {
		restrict: 'A',
		scope: false,
		link: function(scope, element, attrs) {
            var fn = $parse(attrs.onReadFile);
            
			element.on('change', function(onChangeEvent) {
				var reader = new FileReader();
                
				reader.onload = function(onLoadEvent) {
					scope.$apply(function() {
						fn(scope, {$fileContent:onLoadEvent.target.result});
					});
				};

				reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
			});
		}
	};
});