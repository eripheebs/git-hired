gitHired.factory('UserDataFactory', function() {

  var User = function(login, repos, followers, avatar) {
    this.login = login;
    this.avatar = avatar;
    this.repos = repos;
    this.followers = followers;
  };

  return User;
});
