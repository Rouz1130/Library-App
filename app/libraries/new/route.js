import Ember from 'ember';

export default Ember.Route.extend({
//  createRecord it appears in the controller and in template.
  model: function() {
    return this.store.createRecord('library');
  },

// setupController hook .
  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new Library');
    controller.set('buttonLabel','Create');
  },

  // setting non-default template location with renderTemplate hook.
  renderTemplate() {
    this.render('libraries/form');
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

      let model = this.controller.get('model');

      if(model.get('isNew')) {
        model.destroyRecord();
      }

    }
  }
});
