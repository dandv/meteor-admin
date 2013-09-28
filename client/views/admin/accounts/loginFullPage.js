Template.adminLoginFullPage.events({
  'click #login-buttons-password': function () {
    login();
  },
  'keypress #login-old-password, keypress #login-password, keypress #login-password-again': function (event) {
    if (event.keyCode === 13)
      login();
  }
});

Template._loginButtons.events({
  'click #login-buttons-logout': function() {
    Meteor.logout(function () {
      Router.go('home');
    });
  }
});

var login = function() {
  var username = trimmedElementValueById('login-username');
  var email = trimmedElementValueById('login-email');
  // notably not trimmed. a password could (?) start or end with a space
  var password = elementValueById('login-password');

  Meteor.loginWithPassword(email, password, function (error, result) {
    if (!error) {
      Router.go('admin');
    }
  });
}

var elementValueById = function(id) {
  var element = document.getElementById(id);
  if (!element)
    return null;
  else
    return element.value;
};

var trimmedElementValueById = function(id) {
  var element = document.getElementById(id);
  if (!element)
    return null;
  else
    return element.value.replace(/^\s*|\s*$/g, ""); // trim() doesn't work on IE8;
};

Template._loginFullPageLoggedOutPasswordService.fields = function () {
  var loginFields = [
    {fieldName: 'email', fieldLabel: 'Email', inputType: 'email',
     visible: function () {
       return true;
     }},
    {fieldName: 'password', fieldLabel: 'Password', inputType: 'password',
     visible: function () {
       return true;
     }}
  ];
  return loginFields;
}