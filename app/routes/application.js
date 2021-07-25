import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  /**
   * This model hook is ran for _every_ route. Because routes are a hierarchy.
   * But because it would be verbose to say 'application.foo', application is
   * omitted from all route names (dot notation).
   *
   * So, we _cannot_ transition away from the application route. I believe this
   * should probably throw an error when transitionTo is called at all from the
   * application route.
   *
   * Instead, what we want to do is transition away *only* if we are not on a sub-route.
   * Like, application.index.
   */
  async model() {
    console.log('Application Model Hook');
    // NullVoxPopuli's opinion: this should throw an error
    // return this.transitionTo('foo');
  }
}
