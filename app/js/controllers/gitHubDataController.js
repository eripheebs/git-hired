gitHired.controller('gitHubDataController',['GitHubDataService', function (GitHubDataService) {
  var self = this;

  GitHubDataService.getAll("jeremy").then(function(usernames){
    self.usernames = usernames;
  });

}]);
