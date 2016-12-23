var Backbone = require('backbone');
var Marionette = require('marionette');

module.exports = Marionette.CompositeView.extend({
  childViewContainer: '.item-list',
  template: 'Settings/ThingyHeaderGroupView',
  tagName: 'div',

  childViewOptions() {
    return {
      targetCollection: this.targetCollection
    };
  },

  initialize(options) {
    options = options || {};

    this.targetCollection = options.targetCollection;
    this.collection = new Backbone.Collection(this.model.get('collection'));
  }
});