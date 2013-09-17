Template.config.events({
  //generic call meteor server method, name of method is based on button id
  'click button': function(event, template) {
    event.preventDefault();
    var doc = {};
    var cid = $(event.currentTarget).data('id');
    doc.id = $(event.target).attr('id');
    doc.name = $(event.target).attr('name');
    doc.value = $(event.target).val();
    Meteor.call(cid, doc);
  }
});

Template.config.events({
  'keypress': function(event, template) {
    if(event.which === 13) {
      event.preventDefault();
      var doc = {};
      doc.name = $(event.target).attr('name');
      doc.value = $(event.target).val();
      Meteor.call('updateConfig', doc);
      $(event.target).blur();
    }
  }
});