import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // RSVP hash to retrive multipile models on same route
    return Ember.RSVP.hash ){
      libraries: this.store.findAll('library'),
      books: this.store.findAll('book'),
      authors: this.store.findAll('author')
    })
  },

  // steupController hook we split up models in their own controller.
  setupController('controller', model) {
    controller.set('libraries', model.libraries);
    controller.set('books', model.books);
    controller.set('authors', model.authors);

    // route hooks are called in specfic sequence.
  }
});
