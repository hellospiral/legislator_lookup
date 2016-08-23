import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    houseCommittees() {
      var params = {
        body: 'house'
      };
      this.sendAction('committeeLookup', params);
    },

    senateCommittees() {
      var params = {
        body: "senate"
      };
      this.sendAction('committeeLookup', params);
    }
  }
});
