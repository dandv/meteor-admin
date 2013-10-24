Router.map(function() {
  this.route('loginFullPage', { path: '/login' });
  this.route('registerFullPage', { path: '/register' });
  this.route('forgotFullPage', { path: '/forgot' });
  this.route('changeFullPage', { path: '/change' });
  this.route('users', { path: '/admin', controller: 'AdminController' });
  this.route('configs', { path: '/admin/configs', controller: 'ConfigsController' });
  this.route('home', { path: '/' });
});

AdminController = RouteController.extend({
  loadingTemplate: 'adminLoading',
  notFoundTemplate: 'adminNotFound',
  waitOn: function() {
    return Meteor.subscribe('allUsers');
  },
  data: function() {
    return 'users';
  },
  run: function () {
    var self = this;
    Meteor.call('admin', function(error, isAdmin) {
      if(isAdmin) {
        self.render();
      } else {
        throwAlert('Please login to proceed', 'info');
        self.render('adminNotAuthorized');
      }
    });
  }
});

ConfigsController = RouteController.extend({
  loadingTemplate: 'adminLoading',
  notFoundTemplate: 'adminNotFound',
  waitOn: function() {
    return Meteor.subscribe('configs');
  },
  data: function() {
    return 'configs';
  },
  run: function () {
    var self = this;
    Meteor.call('admin', function(error, isAdmin) {
      if(isAdmin) {
        self.render();
      } else {
        throwAlert('Please login to proceed', 'info');
        self.render('adminNotAuthorized');
      }
    });
  }
});
