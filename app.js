angular.module('app', []).
        controller('Ctrl', function($scope) {
            $scope.column1Array = [{'temp':'template2.html'},{'temp':'template3.html'}];
            $scope.column2Array = [{'temp':'template1.html'},{'temp':'template4.html'},{'temp':'template5.html'}];
            $scope.column3Array = [];

        }).
        directive('sortable',function(){
            return {
                restrict:"A",
                link: function (scope, element) {
                    $(element).sortable({
                        connectWith: '.sortable-list'
                    });

                }
            };
        }).
        directive('draggable', function(){
            return {
                restrict:"A",
                link: function(scope, element){
                    $(element).draggable({
                        revert: "valid",
                        handle: "li",
                        start: function(e, ui) {
                            console.log("start");
                        },
                        drag: function(e, ui) {
                            console.log("drag");
                        },
                        stop: function(e, ui) {
                            console.log("stop");
                        }
                    });
                }
            }
        }).
        directive('droppable', function(){
            return {
                restrict:"A",
                link: function(scope, element){
                    $(element).droppable({
                        accept: "#draggable"
                    });
                }
            }
        });
