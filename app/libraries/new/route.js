import Ember from 'ember';

export default Ember.Route.extend({
//  createRecord it appears in teh controller and in template.
  model() {
    return this.store.createRecord('library');
  },

  actions: {
    // corresponding save action button in newLibrary HBS.
    // newLibrary is the parameter we save in our model in the next line.
    saveLibrary(newLibrary) {
      newLibrary.save().then(() =>
      // transitionTo sends the saved info back to homepage which is the parameter inside ...libraries
       this.transitionTo('libraries'));
    },
    // built-in Ember.js action (event) called willTransition
    // called when you lave a page(route)
    // In our case, we use this action to reset the model if we haven’t saved it in the database yet.
    willTransition() {
      // rollbackAttributes() removes the record from the store
     // if the model 'isNew

      this.controller.get('model').rollbackAttributes();
    }
  }
});
