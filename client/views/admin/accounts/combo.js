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
        Session.set('alert', error.reason || 'Unknown error');
      } else {
        Session.set('dropdown', undefined);
      }
    });
  }
});