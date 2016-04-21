describe('GitHubDataService', function() {
  beforeEach(module('gitHired'));

  var GitHubDataService, httpBackend;

  var gitHubData = {items: [{"login": "Name1"}, {"login": "Name2"}]};

  beforeEach(inject(function(_GitHubDataService_, $httpBackend) {
    GitHubDataService = _GitHubDataService_;
    httpBackend = $httpBackend;
  }));

  it('fetches users from github', function(){
    httpBackend.expectGET("https://api.github.com/search/users?q=Name").respond(gitHubData);

    GitHubDataService.getAll("Name").then(function(usernames) {
      expect(usernames).toEqual(["Name1", "Name2"]);
    });

    httpBackend.flush();
  })
})
