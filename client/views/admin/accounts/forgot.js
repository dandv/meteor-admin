Template.forgot.fields = function () {
  return [{
    fieldName: 'email', fieldLabel: 'Email', inputType: 'email',
    visible: function () {
      return true;
    }
  }];
};
Template.forgot.events({
  'click button': function () {
    if (event.type === 'click' || (event.type === 'keyup' && event.which === 13)) {
      var options = {
        email: trimmedElementValueById('email')
      };
      Accounts.forgotPassword(options, function(error, result) {
        if(error) {
          throwAlert(error.reason || "Unknown error", 'danger');
        } else {
          throwAlert('You should receive an email shortly with instructions for changing your password', 'info');
          Router.go('home');
        }
      });
    }
  }
});
