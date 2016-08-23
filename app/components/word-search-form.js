import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    wordLookup() {
      var params = {
        phrase: this.get('phrase')
      };
      this.sendAction('wordLookup', params);
    }
  }
});
