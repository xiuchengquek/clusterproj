/**
 * Created by xiuchengquek on 2/05/15.
 */
angular.module('fileLoader') //gets
.factory('fileLoaderFactory', function($q, $log) {

        var onLoad = function(reader, deferred, scope) {
            return function () {
                scope.$apply(function () {
                    deferred.resolve(reader.result);
                });
            };
        };

        var onError = function (reader, deferred, scope) {
            return function () {
                scope.$apply(function () {
                    deferred.reject(reader.result);
                });
            };
        };

        var onProgress = function(reader, scope) {
            return function (event) {
                scope.$broadcast("fileProgress",
                    {
                        total: event.total,
                        loaded: event.loaded
                    });
            };
        };

        var getReader = function(deferred, scope) {
            var reader = new FileReader();
            reader.onload = onLoad(reader, deferred, scope);
            reader.onerror = onError(reader, deferred, scope);
            reader.onprogress = onProgress(reader, scope);
            return reader;
        };

        var readAsText = function (file, scope) {
            var deferred = $q.defer();

            var reader = getReader(deferred, scope);
            reader.readAsText(file);

            return deferred.promise;
        };

        return {
            readAsText: readAsText
        };


})


angular.module('fileLoader')
    .factory('parseData', function(){

        var groupData = {};
        var sampleList = [];

        var splitText = function(data, scope) {
            var lines, header = [];

            lines = data.split('\n');
            sampleList.push(lines.shift().split('\t'));

            angular.forEach(lines, function(value, key){
                var gene;

                value = value.split('\t');
                gene = value.shift();
                groupData[gene] = value;
            });
            console.log('Called')
            console.log(groupData)
        };

        var getSample = function() {
            console.log(sampleList)
            return sampleList

        };

        var getData = function() {
            return groupData
        };

        return {
            getSample : getSample,
            getData : getData,
            splitText: splitText
        }

    }) //gets
