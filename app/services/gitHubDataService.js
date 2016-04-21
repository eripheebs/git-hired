gitHired.service('GitHubDataService', ['$http', 'GitHubDataFactory', function($http, GitHubDataFactory) {
  var self = this;

  self.getAll = function() {
    return $http.get("")
      .then(_handleResponseFromAPI);
  };

  function _handleResponseFromAPI (response) {
    return response.data.map(function(gitHubData));
      return new GitHubDataFactory(username);
    };
  }
}]);
