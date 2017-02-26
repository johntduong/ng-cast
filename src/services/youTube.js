angular.module('video-player')
.service('youTube', function($http, $window) {
  // console.log($window.YOUTUBE_API_KEY);
  // TODO
  this.search = function(query, callback) {
    return $http({
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'GET',
      params: {
        part: 'snippet',
        key: $window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: true
      }
      // contentType: 'application/json',
    }).then(function(response) {
      callback(response.data.items);
    }, function(data) {
      console.error('failed to retrieve the data', data);
    });
  };

  return {search: this.search};
});
