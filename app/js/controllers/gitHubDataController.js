gitHired.controller('gitHubDataController',['GitHubDataService', 'UserDataService', function (GitHubDataService, UserDataService) {
  var self = this;

  self.users = [];

  self.searchUser = function(searchUserText) {
    GitHubDataService.getAll(searchUserText)
      .then(_getUserData);
  };

  function _getUserData(usernames) {
    _refreshUserArray();
    _createUserArray(usernames);
  }

  getUser = function(username){
    UserDataService.getUser(username).then(function(user){
      self.users.push(user);
    });
  };

  function _refreshUserArray(){
    self.users = [];
  }

  function _createUserArray(usernames){
    usernames.map(function(username){
      return getUser(username);
    });
  }
}]);
