import Ember from 'ember';
const { Route } = Ember;

export default Route.extend({
  model() {
    return {
      title: 'ember-portal'
    };
  }
});
