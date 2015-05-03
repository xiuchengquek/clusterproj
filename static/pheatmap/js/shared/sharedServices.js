/**
 * Created by xiuchengquek on 2/05/15.
 */
angular.module('pheatmapShared.services', []); //instantiates
angular.module('pheatmapShared.services') //gets
.service('dataService', function() {
        var rawCounts = [];

        var addData = function(x){
            rawCounts.push(x)

        };

        var cleanData = function(){
            rawCounts = [];
        };

        var getData = function(){
            return rawCounts
        };
  return {
      addData : addData,
      cleanData : cleanData,
      getData : getData
  };
})


