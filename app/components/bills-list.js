import Ember from 'ember';

export default Ember.Component.extend({

  isComplete: function() {
    return this.get('short_title') != "<!---->";
  }.property('short_title')
});
