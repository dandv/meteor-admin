Template.register.fields = function () {
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
Template.register.events({
  'click button, keyup input': function () {
    if (event.type === 'click' || (event.type === 'keyup' && event.which === 13)) {
      var options = {
        email: trimmedElementValueById('email')
        ,password: elementValueById('password')
      };
      Accounts.createUser(options, function(error, result){
        if(error) {
          throwAlert(error.reason || "Unknown error", 'error');
        } else {
          throwAlert('Successfully registered', 'info');
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