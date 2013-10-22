Template.accountButtons.events({
  'click #login': function () {
    Meteor.loginWithPassword(loginSelector, password, function(error, result) {
      if(error) {
        Session.set('alert', error.reason || 'Unknown error');
      } else {
        Session.set('dropdown', undefined);
      }
    });
  },
  'click #register': function () {
    Accounts.createUser(options, function(error){
      if(error) {
        Session.set('alert', error.reason || "Unknown error");
      } else {
        Session.set('dropdown', undefined);
      }
    });
  }
});