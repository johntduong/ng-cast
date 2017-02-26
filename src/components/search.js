angular.module('video-player')

.directive('search', function() {
  return {
    scope: {
      result: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope, youTube) {
      console.log('youtube', youTube);
      $scope.ctrl.searchInput = '';
      $scope.ctrl.handleClick = function() {
        youTube.search($scope.ctrl.searchInput, function(data) {
          $scope.ctrl.result(data);
        });
      };
    },
    // TODO
    templateUrl: 'src/templates/search.html'
  };
});
