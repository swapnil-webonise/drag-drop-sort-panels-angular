/**
 * Created with JetBrains PhpStorm.
 * User: weboniselab
 * Date: 6/10/14
 * Time: 7:29 PM
 * To change this template use File | Settings | File Templates.
 */

var app = angular.module('app', []);
app.directive('templatedir', function(){
        return {
            restrict:"E",
            templateUrl:"/home/weboniselab/projects/php/apps2014/poc/template1.html"
        }
    });
