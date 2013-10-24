/**
 * Public methods for managing configs
 * @param document
 */
Meteor.methods({
  addConfig: function(document) {
    if(_admin(this.userId)) _addConfig(document);
  },
  updateConfig: function(document) {
    if(_admin(this.userId)) _updateConfig(document);
  },
  removeConfig: function(document) {
    if(_admin(this.userId)) _removeConfig(document);
  }
});

/**
 * Private methods for managing configs
 * @param document
 * @private
 */
var _addConfig = function(document) {
  var check = Configs.findOne({name: document.name});
  if(typeof check === 'undefined') {
    Configs.insert({name: document.name, value: document.value});
  } else {
    Configs.update({name: document.name}, {$set: { value: document.value}});
  }
};
var _updateConfig = function(document) {
  Configs.update({name: document.name}, {$set: {value: document.value}});
};
var _removeConfig = function(document) {
  Configs.remove({_id: document.id});
};
