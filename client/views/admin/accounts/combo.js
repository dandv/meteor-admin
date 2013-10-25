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
  'click': function(e) {
    e.stopPropagation();
    if(e.currentTarget.getAttribute('id') === 'login') {
      var loginSelector = trimmedElementValueById('username') || { email: trimmedElementValueById('email') };
      var password = elementValueById('password');
      Meteor.loginWithPassword(loginSelector, password, function(error, result) {
        if(error) {
          throwAlert(error.reason || 'Unknown error', 'danger');
        } else {
          if(Meteor.user() && Meteor.user().admin) {
            Router.go('users');
          } else {
            Router.go('/');
          }
        }
      });
    }
    if(e.currentTarget.getAttribute('id') === 'register') {
      var options = {
        email: trimmedElementValueById('email')
        ,password: elementValueById('password')
      };
      Accounts.createUser(options, function(error, result){
        if(error) {
          throwAlert(error.reason || "Unknown error", 'danger');
        } else {
          throwAlert('Successfully registered', 'info');
          if(Meteor.user() && Meteor.user().admin) {
            Router.go('users');
          } else {
            Router.go('/');
          }
        }
      });
    }
  }
});
