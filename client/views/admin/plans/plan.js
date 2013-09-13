Template.plan.events({
  //generic call meteor server method, name of method is based on button id
  'click button': function(event, template) {
    event.preventDefault();
    var cid = $(event.currentTarget).attr('id');
    var cname = $(event.currentTarget).data('id');
    Meteor.call(cid, cname);
  }
});

Template.plan.events({
  'keypress': function(event, template) {
    if(event.which === 13) {
      var doc = {};
      doc.name = $(event.target).attr('name');
      doc.value = $(event.target).val();
      Meteor.call('updateConfig', doc);
      $(event.target).blur();
    }
  }
});