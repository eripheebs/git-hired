gitHired.factory('UserDataFactory', function() {

  var User = function(login, repos, followers, avatar, url) {
    this.login = login;
    this.avatar = avatar;
    this.repos = repos;
    this.followers = followers;
    this.url = url;
  };

  return User;
});
