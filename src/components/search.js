angular.module('video-player')

.directive('search', function() {
  return {
    scope: {
      searchYoutube: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      console.log('search scope', $scope);
      $scope.ctrl.searchInput = '';
      $scope.ctrl.result = function() {
        
      };
      $scope.ctrl.submitSearch = function(query) {
        $scope.ctrl.searchYoutube(query);
        $scope.ctrl.searchInput = '';
      };
    },
    // TODO
    templateUrl: 'src/templates/search.html'
  };
});
