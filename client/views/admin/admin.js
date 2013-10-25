Template.admin.helpers({
  loggedIn: function() {
    return Meteor.user() != null;
  },
  displayName: function() {
    var user = Meteor.user();
    if(!user) return '';
    if(user.profile && user.profile.name) return user.profile.name;
    if(user.username) return user.username;
    if(user.emails && user.emails[0] && user.emails[0].address) return user.emails[0].address;
    return '';
  }
});

//broke
isAdmin = function() {
  return Meteor.user() ? Meteor.user().admin : false;
};
