Meteor.publish('plans', function() {
  return Plans.find();
});

/**
 * Publish user information including role
 */
Meteor.publish(null, function() {
  return Meteor.users.find({_id: this.userId}, {fields: {username: 1, profile: 1, admin: 1}});
})