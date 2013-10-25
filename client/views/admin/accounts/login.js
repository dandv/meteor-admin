Template.login.fields = function () {
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
Template.login.events({
  'click button, keyup input': function () {
    if (event.type === 'click' || (event.type === 'keyup' && event.which === 13)) {
      var loginSelector = trimmedElementValueById('username') || { email: trimmedElementValueById('email') };
      var password = elementValueById('password');
      Meteor.loginWithPassword(loginSelector, password, function(error, result) {
        if(error) {
          throwAlert(error.reason || "Unknown error", 'danger');
        } else {
          throwAlert('Successfully logged in', 'info');
          if(isAdmin) {
            Router.go('users');
          } else {
            Router.go('/');
          }
        }
      });
    }
  }
});
