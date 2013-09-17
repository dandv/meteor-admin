Meteor.startup(function() {
  //Meteor Bar integration
  _addBar({name: 'admin', show: true});
});

var seed = function () {
  Fakes.remove({});
  for (var i = 0; i < 50; i++) {
    Fakes.insert({body: 'Item ' + i});
  }
};

Meteor.startup(seed);

var Future = Npm.require('fibers/future');

Meteor.publish('fakes', function () {
  var future = new Future;

  // simulate high latency publish function
  Meteor.setTimeout(function () {
    future.return(Fakes.find());
  }, 200);

  return future.wait();
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
