import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    console.log('Application Model Hook');
    return this.transitionTo('foo');
  },
});
