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
  if(_.isUndefined(this.userId)) { return false; }
  var user = Meteor.users.findOne(this.userId);
  return user.admin;
};

/**
 * Security checks
 */
Plans.allow({
  insert: _admin(),
  update: _admin(),
  remove: _admin()
});