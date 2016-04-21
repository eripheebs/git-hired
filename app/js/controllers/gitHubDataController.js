gitHired.controller('gitHubDataController',['GitHubDataService', function (GitHubDataService) {
  var self = this;

  GitHubDataService.getAll().then(function(users){
    self.users = users;
  })

}]);
