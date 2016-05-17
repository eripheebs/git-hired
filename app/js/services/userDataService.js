gitHired.service('UserDataService', ['$http', 'UserDataFactory', function($http, UserDataFactory) {
  var self = this;

  self.getUser = function(username) {
    return $http.get("https://api.github.com/users/" + username + "?access_token=92a1dbb7644d40d15398a160b6002835ca85ef31")
      .then(_handleResponseFromAPI, _errorCallback);
  };

  function _handleResponseFromAPI (response) {
    userData = response.data;
    return new UserDataFactory(userData.login, userData.public_repos, userData.followers, userData.avatar_url, userData.html_url);
  }

  function _errorCallback(error) {
    return error;
  }
}]);
