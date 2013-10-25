function TzCtrl($scope) {
  $scope.sample = function() {
    return "Hello, World";
  };
  $scope.now = function(offset) {
    return moment().utc().add('hours', offset).format('YYYY-MM-DD HH:mm:ss');
  }
}

function realtime() {
  setInterval(function() {
    var elms = $('.realtime');
    for (var i = 0;i < elms.length; i++) {
      var elm = $(elms[i]);
      var dateString = elm.html();
      if (dateString) {
        var next = moment(dateString, 'YYYY-MM-DD HH:mm:ss').add('seconds', 1).format('YYYY-MM-DD HH:mm:ss');
        elm.html(next);
      }
    };
  }, 1000);
}

$(function() {
  $('[rel=popover]').popover({html: true});
  realtime();
});
