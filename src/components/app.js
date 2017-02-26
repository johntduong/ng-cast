angular.module('video-player')
.directive('app', function() {
  return {
    scope: {
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope, $window, youTube) {
      
      $scope.ctrl.selectVideo = function(selectedVideo) {
        $scope.ctrl.currentVideo = selectedVideo;
      };
      
      $scope.ctrl.videos = $window.exampleVideoData;
 
      $scope.ctrl.currentVideo = $window.exampleVideoData[0];

      $scope.ctrl.searchResults = function(query) {
        youTube.search(query, function(data) {
          $scope.ctrl.videos = data;
          $scope.ctrl.currentVideo = data[0];
        });
      };

      $scope.ctrl.searchResults2 = function(data) {
        $scope.ctrl.videos = data;
        $scope.ctrl.currentVideo = data[0];
      };
      
      youTube.search('south park', $scope.ctrl.searchResults2);
    },
    templateUrl: 'src/templates/app.html'
  };
});
