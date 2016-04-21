gitHired.service('GitHubDataService', ['$http', 'GitHubDataFactory', function($http, GitHubDataFactory) {
  var self = this;

  self.getAll = function(username) {
    var self = this;
    self.userNotFound = false;
    return $http.get("https://api.github.com/users/" + username)
      .then(_handleResponseFromAPI, _errorCallback)
  };

  function _handleResponseFromAPI(response) {
    return response.data.map(function(gitHubData){
      console.log(gitHubData);
      // return new GitHubDataFactory(data);
    });
  }

  function _errorCallback(error) {
    return error
  }
}]);
