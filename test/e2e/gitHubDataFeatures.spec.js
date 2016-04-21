describe('gitHubDataController',function () {
  beforeEach(function () {
    browser.get('/');
  });
  it('has users', function () {
    var users = $$('#users p');
    expect(users.first().getText()).toMatch('tobenna');
    expect(users.last().getText()).toMatch('hanfak');
  });
});
