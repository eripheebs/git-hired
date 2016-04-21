gitHired.service('UserDataService', ['$http', 'UserDataFactory', function($http, UserDataFactory) {
  var self = this;

  self.getUser = function(username) {
    return $http.get("https://api.github.com/users/" + username + "?access_token=72ca3f0ebee0939835f6d1f6bb3d3d18d1ddf260")
      .then(_handleResponseFromAPI, _errorCallback);
  };

  function _handleResponseFromAPI (response) {
    userData = response.data
    return new UserDataFactory(userData.login, userData.public_repos, userData.followers, userData.avatar_url);
  };

  function _errorCallback(error) {
    console.log(error);
    return error;
  }
}]);
