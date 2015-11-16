module.exports = ['$log', function($log) {
  var funcyLog = function(message) {
    var baseCss = ' background-color: black; line-height: 2em;';
    $log.log('%c * %c' + message + '%c * ',
      'color:yellow; font-weight: bold;' + baseCss,
      'color:pink;' + baseCss,
      'color:yellow; font-weight: bold;' +  baseCss);
  };

  return funcyLog;
}];
