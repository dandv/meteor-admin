if (Meteor.isClient) {
  Template.admin.helpers({
    plans: function() {
      return Plans.find();
    },
    plansReady: function() {
      return plansHandler.ready();
    }
  });

  Template.admin.events({

  });
};