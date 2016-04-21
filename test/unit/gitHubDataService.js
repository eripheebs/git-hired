describe('GitHubDataService', function() {
  beforeEach(module('gitHired'));

  var GitHubDataService, httpBackend;

  var gitHubData = [{username: "Name1"}, {username: "Name2"}];

  beforeEach(inject(function(_GitHubDataService_, $httpBackend) {
    GitHubDataService = _GitHubDataService_;
    // GitHubDataFactory = _GitHubDataFactory_;
    httpBackend = $httpBackend;
  }));

  var fakePerson1 = new GitHubDataFactory("Name1");
  var fakePerson2 = new GitHubDataFactory("Name2");

  it('fetches users from github', function(){
    httpBackend.expectGET("").respond(gitHubData);

    GitHubDataService.getAll().then(function(todos) {
      expect(users).toEqual([fakePerson1, fakePerson2]);
    });

    httpBackend.flush();
  })
})
