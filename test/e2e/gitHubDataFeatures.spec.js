describe('gitHubDataController',function () {
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
    mypic = user.element(by.css("img[src*='https://avatars.githubusercontent.com/u/583231?v=3']"));
    expect((mypic).isPresent()).toBe(true);
  });
});
