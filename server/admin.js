/**
 * Public methods for managing plans
 * @param document
 */
Meteor.methods({
  addPlan: function(document) {
    if(_admin()) {
      _addPlan(document);
    }
  },
  updatePlan: function(document) {
    if(_admin()) {
      _updatePlan(document);
    }
  },
  removePlan: function(document) {
    if(_admin()) {
      _removePlan(document);
    }
  }
});

/**
 * Private methods for managing plans
 * @param document
 * @private
 */
_addPlan = function(document) {
  var check = Plans.findOne({name: document.name});
  if(typeof check === 'undefined') {
    Plans.insert({name: document.name, value: document.value, confirmed: !this.isSimulation});
  } else {
    Plans.update({name: document.name}, {$set: { value: document.value, confirmed: !this.isSimulation }});
  }
};
_updatePlan = function(document) {
  Plans.update({name: document.name}, {$set: {value: document.value, confirmed: !this.isSimulation}});
};
_removePlan = function(document) {
  var check = Plans.findOne({name: document.name});
  if(typeof check !== 'undefined') {
    Plans.remove({name: document.name});
  }
};
