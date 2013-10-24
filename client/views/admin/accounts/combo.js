Template.combo.fields = function () {
  return [{
    fieldName: 'email', fieldLabel: 'Email', inputType: 'email',
    visible: function () {
      return true;
    }
  },{
    fieldName: 'password', fieldLabel: 'Password', inputType: 'password',
    visible: function () {
      return true;
    }
  }];
};
Template.combo.events({
  'click #login': function () {
    var loginSelector = [];
    var password = '';
    Meteor.loginWithPassword(loginSelector, password, function(error, result) {
      if(error) {
        throwAlert(error.reason || 'Unknown error', 'danger');
      } else {
        Session.set('dropdown', undefined);
      }
    });
  },
  'click #register': function () {
    var options = {
      email: trimmedElementValueById('email')
      ,password: elementValueById('password')
    };
    Accounts.createUser(options, function(error, result){
      if(error) {
        throwAlert(error.reason || "Unknown error", 'danger');
      } else {
        throwAlert('Successfully registered', 'info');
        if(isAdmin) {
          Router.go('users');
        } else {
          Router.go('home');
        }
      }
    });
  }
});
