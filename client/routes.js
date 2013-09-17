Router.map(function() {
  this.route('admin', {
    controller: 'AdminController',
    action: 'customAction'
  });
});

AdminController = RouteController.extend({
  loadingTemplate: 'loading',
  waitOn: function() {
    return Meteor.subscribe('fakes');
  },
  customAction: function () {
    var self = this;
    Meteor.call('admin', function(error, result) {
      if(result) {
        self.render('admin');
      } else {
        self.render('notAuthorized');
      }
    });

    this.render({
      header: { to: 'header', waitOn: false, data: false }
    });
  }
});
