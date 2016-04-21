describe('UserDataService', function() {
  beforeEach(module('gitHired'));

  var UserDataService, httpBackend;

  var userData = "Name";

  beforeEach(inject(function(_UserDataService_, _UserDataFactory_, $httpBackend) {
    UserDataService = _UserDataService_;
    UserDataFactory = _UserDataFactory_;
    httpBackend = $httpBackend;
  }));

  var fakePerson = new UserDataFactory("Name", 25, 5, 'https://avatars.githubusercontent.com/u/583231?v=3');

  it('fetches users from github', function(){
    httpBackend.expectGET("").respond(userData);

    GitHubDataService.getUser().then(function(todos) {
      expect(user).toEqual(fakePerson);
    });

    httpBackend.flush();
  })
})
