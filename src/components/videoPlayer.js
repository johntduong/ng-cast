angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    scope: {
      video: '<'
    },
    templateUrl: 'src/templates/videoPlayer.html',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      // $scope.findVideo = function(video) {
      //   // console.log('video', video);
      //   return 'https://www.youtube.com/embed/' + video.id.videoId;
      // };
      // $scope.videoPresent = false;
    }
  };
});


//$compile('<video-player video="video"></video-player>')($rootScope.$new());