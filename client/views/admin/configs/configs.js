Template.configs.helpers({
  configs: function() {
    return Configs.find();
  }
});

Template.configs.events({
  //generic call meteor server method, name of method is based on button id
  'click button': function(event, template) {
    event.preventDefault();
    var doc = {};
    var cid = $(event.target).attr('id');
    doc.name = $('#name').val();
    if(cid == 'addConfig') {
      doc.value = $('#value').val();
    }
    Meteor.call(cid, doc);
    $(event.target).blur();
  }
});