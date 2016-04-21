describe('gitHiredController', function() {
  beforeEach(module('gitHired'));

  var ctrl;
  beforeEach(inject(function($controller) {
    ctrl = $controller('gitHiredController');
  }));

  it('Karma and protractor setup test', function () {
    expect(ctrl.hi).toEqual('Hello World!');
  });
});
