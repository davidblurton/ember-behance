import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberBehancePortfolioENV.locationType
});

Router.map(function() {
  this.resource('portfolio', { path: '/' }, function() {
    this.resource('project', { path: '/:project_id' });
  });
  
  this.route('contact');
});

export default Router;
