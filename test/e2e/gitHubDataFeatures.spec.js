describe('gitHubDataController',function () {
  var user;
  
  beforeEach(function () {
    browser.get('/');
  });
  it('has users', function () {
    var users = $$('#users p');
    expect(users.first().getText()).toMatch('tobenna');
    expect(users.last().getText()).toMatch('hanfak');
  });

  it('has user avatars', function () {
    var user = $$('#users p').first();
    var mypic = user.element(by.css("img[src*='https://avatars.githubusercontent.com/u/583231?v=3']"));
    expect((mypic).isPresent()).toBe(true);
  });

  describe('user details',function () {

    beforeEach(function () {
      browser.get('/');
      user = $$('#users p').first();
    });

    it('displays the number of followers',function () {
      var followers = user.element(by.css(".followers"));
      expect(followers.getText()).toMatch('5');
    });

    it('displays the number of repositories',function () {
      var followers = user.element(by.css(".repos"));
      expect(followers.getText()).toMatch('25');
    });
  });

});
