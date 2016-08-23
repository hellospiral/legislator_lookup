import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    wordLookup(params) {
      this.transitionTo('word-results', params.phrase);
    }
  }
});
