gitHired.service('GitHubDataService', ['$http', function($http) {
  var self = this;

  self.getAll = function(username) {
    var self = this;
    self.userNotFound = false;
    return $http.get("https://api.github.com/search/users?q=" + username)
      .success(_handleResponseFromAPI)
      .error(_errorCallback)
  };

  function _handleResponseFromAPI (response) {
    var data = response.data

  }

  function _errorCallback(error) {
    return error
  }
}]);
