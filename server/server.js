Meteor.startup(function() {
  //Meteor Bar integration
  _addBar({name: 'admin', show: true});
});

/**
 * Public methods for managing plans
 * @param document
 */
Meteor.methods({
  addConfig: function(document) {
    if(_admin()) _addConfig(document);
  },
  updateConfig: function(document) {
    if(_admin()) _updateConfig(document);
  },
  removeConfig: function(document) {
    if(_admin())  _removeConfig(document);
  }
});

/**
 * Private methods for managing plans
 * @param document
 * @private
 */
_addConfig = function(document) {
  var check = Configs.findOne({name: document.name});
  if(typeof check === 'undefined') {
    Configs.insert({name: document.name, value: document.value});
  } else {
    Configs.update({name: document.name}, {$set: { value: document.value}});
  }
};
_updateConfig = function(document) {
  Configs.update({name: document.name}, {$set: {value: document.value}});
};
_removeConfig = function(document) {
  Configs.remove({_id: document.id});
};
