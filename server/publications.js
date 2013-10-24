Meteor.publish('configs', function() {
  var user = Meteor.users.findOne({_id: this.userId});
  if(user && user.admin) {
    return Configs.find();
  }
  return false;
});

/**
 * Publish user information including role
 */
Meteor.publish(null, function() {
  return Meteor.users.find({_id: this.userId}, {fields: {username: 1, emails: 1, profile: 1, admin: 1}});
});
Meteor.publish('allUsers', function() {
  var user = Meteor.users.findOne({_id: this.userId});
  if(user && user.admin) {
    return Meteor.users.find({}, {fields: {username: 1, emails: 1, createdAt: 1, profile: 1, admin: 1}});
  }
  return Meteor.users.find({_id: this.userId}, {fields: {username: 1, emails: 1, profile: 1, admin: 1}});
});
