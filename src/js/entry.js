'use strict';

var mainPageController = require('./mainPageController.js');
var funcyLog = require('./funcyLog.service.js');
var time = require('./time.directive.js');

var myApp = angular.module('myApp', []);

myApp.controller('mainPage', mainPageController);
myApp.service('funcyLog', funcyLog);
myApp.directive('time', time);

myApp.run(['funcyLog', function(funcyLog) {
  funcyLog('application start!!!');
}]);
