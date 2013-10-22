Template.change.fields = function () {
  return [{
    fieldName: 'current-password', fieldLabel: 'Current Password', inputType: 'password',
    visible: function () {
      return true;
    }},{
    fieldName: 'new-password', fieldLabel: 'New Password', inputType: 'password',
    visible: function () {
      return true;
    }
  }];
};
Template.change.events({
  'click button': function () {
    if (event.type === 'click' || (event.type === 'keyup' && event.which === 13)) {
      var currentPassword = trimmedElementValueById('current-password');
      var newPassword = trimmedElementValueById('new-password');
      Accounts.changePassword(currentPassword, newPassword, function(error, result) {
        if(error) {
          throwAlert(error.reason || "Unknown error", 'error');
        } else {
          throwAlert('Password changed successfully', 'success');
          Router.go('admin');
        }
      });
    }
  }
});