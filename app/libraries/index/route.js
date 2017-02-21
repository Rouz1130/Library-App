import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return this.store.findAll('library');
},

// action buttonin hbs file.
actions: {
  deleteLibrary(library) {
    // message pop up
    let confirmation = confirm('Are you sure?');

    if (confirmation) {
      // destroyRecord remove from databse/model
      library.destroyRecord();
    }
  }
}
});
