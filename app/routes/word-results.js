import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
   var url = 'http://capitolwords.org/api/1/dates.json?phrase='+ params.phrase + '&percentages=true&granularity=year&apikey=533b1c33102848d3b57320eda017bb25';
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
  }
});
