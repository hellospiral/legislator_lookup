import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
   var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=533b1c33102848d3b57320eda017bb25&zip=' + params.zip;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
  }
});
