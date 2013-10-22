Template.listUsers.helpers({
  users: function() {
    return Meteor.users.find().fetch();
  }
});
