import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async beforeModel() {
    console.log('Index Before Model Hook');
    return this.transitionTo('foo');
  }

  async model() {
    console.log('Index Model Hook');
    // This works just fine, but traditionally, beforeModel is used for
    // "guarding access". But uncommint this and commenting out the before model also works
    // return this.transitionTo('foo');
  }
}
