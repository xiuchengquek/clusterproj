


var pheatmap = angular.module('pheatmap', ['fileLoader']);

pheatmap.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');



})

angular.module('fileLoader');
