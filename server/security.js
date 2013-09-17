/**
 * Set default user role on account creation
 * @return user
 */
Accounts.onCreateUser(function(options, user) {
  //assign default role
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
    return _admin();
  }
});

/**
 * Private check for admin privileges
 * @return boolean
 * @private
 */
_admin = function() {
  return Meteor.user() ? Meteor.user().admin : false;
};

/**
 * Security checks
 */
Configs.allow({
  insert: function(userId, doc) {
    var user = Meteor.users.findOne({_id: userId});
    return user ? user.admin : false;
  },
  update: function(userId, doc, fieldNames, modifier) {
    var user = Meteor.users.findOne({_id: userId});
    return user ? user.admin : false;
  },
  remove: function(userId, doc) {
    var user = Meteor.users.findOne({_id: userId});
    return user ? user.admin : false;
  }
});

Meteor.users.allow({
  insert: function(userId, doc) {
    var user = Meteor.users.findOne({_id: userId});
    return user ? user.admin : false;
  },
  update: function(userId, doc, fieldNames, modifier) {
    var user = Meteor.users.findOne({_id: userId});
    return user ? user.admin : false;
  },
  remove: function(userId, doc) {
    var user = Meteor.users.findOne({_id: userId});
    return user ? user.admin : false;
  }
});