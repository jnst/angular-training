function TzCtrl($scope) {

  $scope.sample = function() {
    return "Hello, World";
  };

  $scope.now = function(offset) {
    return moment().utc().add('hours', offset).format('YYYY-MM-DD HH:mm:ss');
  }

}
