/**
 * Created by xiuchengquek on 2/05/15.
 */




angular.module('fileLoader').directive('fileInput', function($parse){

    return {
    restrict: "EA",
    template: "<input type='file' />",
    replace: true,
    link: function (scope, element, attrs) {

        var modelGet = $parse(attrs.fileInput);
        console.log($parse(attrs.fileInput.assign))
        var modelSet = modelGet.assign;
        var onChange = $parse(attrs.onChange);

        var updateModel = function () {
            scope.$apply(function () {
                modelSet(scope, element[0].files[0]);
                onChange(scope);
            });
        };

        element.bind('change', updateModel);
        }
    };




});




