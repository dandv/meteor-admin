Router.map(function() {
  this.route('admin', {
    controller: 'AdminController'
  });
  this.route('_loginButtonsLoggedOutSingleLoginButton', { path: '/login' });
});

AdminController = RouteController.extend({
  template: 'admin',
  loadingTemplate: 'adminLoading',
  notFoundTemplate: 'adminNotFound',
  waitOn: function() {
    return Meteor.subscribe('allUsers');
  },
  run: function () {
    var self = this;
    Meteor.call('admin', function(error, isAdmin) {
      if(isAdmin) {
        self.render();
      } else {
        self.render('adminNotAuthorized');
      }
    });
  }
});
