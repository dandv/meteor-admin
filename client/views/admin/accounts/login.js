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
  'click button': function () {
    if (event.type === 'click' || (event.type === 'keyup' && event.which === 13)) {
      var loginSelector = trimmedElementValueById('username') || trimmedElementValueById('email');
      var password = elementValueById('password');
      Meteor.loginWithPassword(loginSelector, password, function(error, result) {
        if(error) {
          throwAlert(error.reason || "Unknown error", 'error');
        } else {
          throwAlert('Successfully logged in', 'info');
          if(isAdmin) {
            Router.go('dash');
          } else {
            Router.go('home');
          }
        }
      });
    }
  }
});