import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/bills?bill_id=' + params.bill_id + '&apikey=533b1c33102848d3b57320eda017bb25';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results[0];
    });
  }
});
