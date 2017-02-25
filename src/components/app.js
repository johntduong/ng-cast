angular.module('video-player')
.controller('myController', ['$scope', '$window', function($scope, $window) {
  console.log('app scope: ', $scope);
  $scope.videoList = $window.exampleVideoData;
}])
.directive('app', function() {
  return {
    // template: '<div class="mycontroller" ng-controller="myController"><video-list videos="videoList"></div>'
    templateUrl: 'src/templates/app.html'
  };
});
