import Route from '@ember/routing/route';

export default class FooRoute extends Route {
  async model() {
    console.log('Foo Model Hook');
  }
}
