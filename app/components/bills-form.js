import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    billsLookup() {
      this.sendAction('billsLookup');
    }
  }
});
