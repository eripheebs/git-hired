gitHired.service('GitHubDataService', ['$http', function($http) {
  var self = this;

  self.getAll = function(username) {
    return $http.get("https://api.github.com/search/users?q=" + username)
      .then(_handleResponseFromAPI, _errorCallback);
  };

  function _handleResponseFromAPI (response) {
    var userArray = response.data.items;
    var usernames = userArray.map(function (user) {
      return user.login;
    });
    return usernames;
  }

  function _errorCallback(error) {
    return error;
  }
}]);
