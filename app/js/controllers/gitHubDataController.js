gitHired.controller('gitHubDataController',['GitHubDataService', 'UserDataService', function (GitHubDataService, UserDataService) {
  var self = this;

  GitHubDataService.getAll("jeremy").then(function(usernames){
    self.usernames = usernames;
  });

  UserDataService.getUser("tobenna").then(function(user){
    self.user = user;
    self.users.push(user);
  });

  self.users = []

}]);
