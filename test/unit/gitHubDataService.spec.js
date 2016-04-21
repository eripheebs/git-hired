describe('GitHubDataService', function() {
  beforeEach(module('gitHired'));

  var GitHubDataService, httpBackend;

  var gitHubData = [{"login": "Name1"}, {"login": "Name2"}];

  beforeEach(inject(function(_GitHubDataService_, $httpBackend) {
    GitHubDataService = _GitHubDataService_;
    // GitHubDataFactory = _GitHubDataFactory_;
    httpBackend = $httpBackend;
  }));

  it('fetches users from github', function(){
    httpBackend.expectGET("").respond(gitHubData);

    GitHubDataService.getAll("Name").then(function(todos) {
      expect(usernames).toEqual(["Name1", "Name2"]);
    });

    httpBackend.flush();
  })
})
