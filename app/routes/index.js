import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    },

    committeeLookup(params) {
      this.transitionTo('committee-results', params.body);
    },

    billsLookup() {
      this.transitionTo('bills-results');
    }
  }
});
