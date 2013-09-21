Router.map(function() {
  this.route('admin', {
    controller: 'AdminController',
    action: 'customAction'
  });
});

AdminController = RouteController.extend({
  template: 'admin',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return Meteor.subscribe('allUsers');
  },
  customAction: function () {
    var self = this;
    Meteor.call('admin', function(error, isAdmin) {
      if(isAdmin) {
        self.render();
      } else {
        self.render('notAuthorized');
      }
    });
  }
});
