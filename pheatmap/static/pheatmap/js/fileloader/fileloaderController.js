/**
 * Created by xiuchengquek on 2/05/15.
 */
angular.module('fileLoader', [])
angular.module('fileLoader')      //gets
.controller('fileCtrl', function($scope, fileLoaderFactory, parseData ) {


        $scope.data = parseData.getData();
        $scope.sample = parseData.getSample();


        $scope.readFile = function() {

            fileLoaderFactory.readAsText($scope.file, $scope)
                .then(function(result){
                    console.log(result);
                    parseData.splitText(result, $scope);



                })

        };


  //snip...
});
