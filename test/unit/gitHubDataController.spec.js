describe('gitHubDataController', function() {
  beforeEach(module('gitHired'));

  var ctrl, httpBackend, UserDataFactory;

  var gitHubData = {items: [{"login": "Fakey"}]};

  var userData = {"login": "Fakey", "public_repos": 25, "followers": 5, "avatar_url": 'url'};

  beforeEach(inject(function($httpBackend, $controller, _UserDataFactory_) {
    ctrl = $controller('gitHubDataController');
    UserDataFactory = _UserDataFactory_;
    httpBackend = $httpBackend;
  }));

  it('can search for a user', function(){
    httpBackend.expectGET("https://api.github.com/search/users?q=Fakey").respond(gitHubData);
    httpBackend.expectGET("https://api.github.com/users/Fakey?access_token=92a1dbb7644d40d15398a160b6002835ca85ef31").respond(userData);

    var fakePerson = new UserDataFactory("Fakey", 25, 5, 'url');

    ctrl.searchUser("Fakey");

    httpBackend.flush();

    expect(ctrl.users).toEqual([fakePerson]);

  });

});
