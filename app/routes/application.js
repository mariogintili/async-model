import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  async model() {
    console.log('Application Model Hook');
    return this.transitionTo('foo');
  }
}
