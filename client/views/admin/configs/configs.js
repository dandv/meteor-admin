Template.configs.helpers({
  configs: function() {
    return Configs.find();
  }
});

Template.configs.events({
  //generic call meteor server method, name of method is based on button id
  'click button, keyup input': function(event, template) {
    if (event.type === 'click' || (event.type === 'keyup' && event.which === 13)) {
      event.preventDefault();
      var doc = {};
      var cid = $(event.target).attr('id');
      doc.name = $('#name').val();
      doc.value = $('#value').val();
      if((event.type === 'keyup' && event.which === 13)) {
        Meteor.call('addConfig', doc);
      } else {
        Meteor.call(cid, doc);
      }
      $('#name').val('');
      $('#value').val('');
      $(event.target).blur();
    }
  }
});