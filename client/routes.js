Router.map(function() {
  this.route('loginFullPage', { path: '/login' });
  this.route('registerFullPage', { path: '/register' });
  this.route('forgotFullPage', { path: '/forgot' });
  this.route('changeFullPage', { path: '/change' });
  this.route('users', { path: '/admin', controller: 'AdminController' });
  this.route('configs', { path: '/admin/configs', controller: 'ConfigsController' });
});

AdminController = RouteController.extend({
  loadingTemplate: 'adminLoading',
  notFoundTemplate: 'adminNotFound',
  before: [
    function() {
      this.subscribe('allUsers').wait();
    },
    function() {
      if(this.ready()) {
        //NProgress.done();
      } else {
        //NProgress.start();
        this.stop();
      }
    }
  ],
  data: function() {
    return 'users';
  },
  action: function () {
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
  before: [
    function() {
      this.subscribe('configs').wait();
    },
    function() {
      if(this.ready()) {
        //NProgress.done();
      } else {
        //NProgress.start();
        this.stop();
      }
    }
  ],
  data: function() {
    return 'configs';
  },
  action: function () {
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
