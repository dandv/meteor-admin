Template.options.events({
  'click #logout': function() {
    Meteor.logout(function () {
      throwAlert('Successfully logged out', 'info');
      Router.go('home');
    });
  },
  'click #change': function() {
    Router.go('/change');
  }
});