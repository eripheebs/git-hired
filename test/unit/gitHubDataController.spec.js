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
    httpBackend.expectGET("https://api.github.com/users/Fakey").respond(userData);

    var fakePerson = new UserDataFactory("Fakey", 25, 5, 'url');

    ctrl.searchUser("Fakey");

    function expectFunction(){
      var test = setTimeout(myTest, 3000);
    }

    function myTest(){
      expect(ctrl.users).toEqual([fakePerson]);
    }

    httpBackend.flush();
  });

});
