import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('committee-results', {path: '/results/:body'});
  this.route('subcommittees', {path: '/subcommittees/:committee_id'});
  this.route('bills-results');
  this.route('bill-details', {path: '/bills/:bill_id'});
  this.route('legislator', {path: '/legislators/:bioguide_id'});
});

export default Router;
