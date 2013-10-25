Template.user.events({
  'click #edit': function(event, template) {
    $('#editUser'+this._id).modal('show');
  },
  'click #remove': function(event, template) {
    Meteor.users.remove({_id: this._id});
  }
});

Template.user.helpers({
  username: function() {
    return this.username || 'unknown';
  },
  profilename: function() {
    if(this.profile && this.profile.name) {
      return this.profile.name;
    }
    return 'unknown';
  }
});

Template.editUser.events({
  'click #save': function(event, template) {
    $('#editUser'+this._id).modal('hide');
    var fields = {
      username: $('#username'+this._id).val()
      ,profile: {
        name: $('#name'+this._id).val()
      }
      ,admin: $('#admin'+this._id).is(':checked')
    };
    Meteor.users.update({_id: this._id}, {$set: fields});
  }
});

Template.editUser.helpers({
  isAdmin: function() {
    return this.admin ? 'checked' : '';
  }
})
