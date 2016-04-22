gitHired.controller('gitHubDataController',['GitHubDataService', 'UserDataService', function (GitHubDataService, UserDataService) {
  var self = this;

  self.users = []

  self.searchUser = function(searchUserText) {
    self.getUsernames(searchUserText);
  }


  self.getUser = function(username){
    UserDataService.getUser(username).then(function(user){
      self.users.push(user);
    });
  };

  self.getUsernames = function(username){
    GitHubDataService.getAll(username)
      .then(_getUserData)

    function _getUserData(usernames) {
      self.users = []
      usernames.map(function(username){
        return self.getUser(username);
      });
    };
  };
}]);
