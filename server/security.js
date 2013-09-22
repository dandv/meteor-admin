/**
 * Set default user role on account creation
 * @return user
 */
Accounts.onCreateUser(function(options, user) {
  //if user is first user in db, assign as admin
  //otherwise assign default role
  user.admin = Meteor.users.find().count() === 0;
  if(options.profile) {
    user.profile = options.profile;
  }
  return user;
});

/**
 * Public check for admin privileges
 * @return boolean
 */
Meteor.methods({
  admin: function() {
    return Meteor.user() ? Meteor.user().admin : false;
  }
});

/**
 * Private check for admin privileges
 * @return boolean
 * @private
 */
_admin = function(userId) {
  var user = Meteor.users.findOne({_id: userId});
  return user ? user.admin : false;
};

/**
 * Security checks
 */
Configs.allow({
  insert: function(userId, doc) {
    return _admin(userId);
  },
  update: function(userId, doc, fieldNames, modifier) {
    return _admin(userId);
  },
  remove: function(userId, doc) {
    return _admin(userId);
  }
});

Meteor.users.allow({
  insert: function(userId, doc) {
    return _admin(userId);
  },
  update: function(userId, doc, fieldNames, modifier) {
    return _admin(userId);
  },
  remove: function(userId, doc) {
    return _admin(userId);
  }
});