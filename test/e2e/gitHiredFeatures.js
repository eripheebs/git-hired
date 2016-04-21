describe('Git Hired', function(){
  it('protractor setup', function() {
   browser.get('/');
   expect(browser.getTitle()).toEqual('Git Hired');
  });
});
