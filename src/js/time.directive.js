module.exports = function() {
  return {
    restrict: 'E',
    template: '<div><span>{{time}}</span><div>',
    scope: {
      format: '@'
    },
    controller: ['$scope', '$interval', function($scope, $interval) {
      var format = $scope.format || 'YYYY/MM/DD-hh:mm:ss';
      $interval(function() {
        $scope.time = moment().format(format);
      }, 100);
    }]
  };
};
