angular.module('video-player')
.directive('videoList', function() {
  return {
    scope: {
      videos: '<',
      onClick: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      // console.log('video list', $scope);
      // $scope.ctrl.onClick = function() {};
    },
    // template: '<ul><li ng-repeat="video in ctrl.videos"></li></ul>'
    templateUrl: 'src/templates/videoList.html'
  };
});
