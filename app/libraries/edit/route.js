import Ember from 'ember';

export default Ember.Route.extend({
  // this is defined in router with path to return libary_id
  // params contains the id from teh url.
  model(params) {
    // finds /downloads a single record fromt the server with its give Id.
    return this.store.findRecord('library', params.library_id);
  },


    // 2 actions: 1st-  redirect user to main libraries home page

    actions: {

      saveLibrary(newLibrary) {
        newLibrary.save().then(() => this.transitionTo('libraries'));
      },

      // 2nd action- hasDirtyAttributes Model computed property to check whether something was changed in the model.
      willTransition(transition) {

        let model = this.controller.get('model');
        // IF so User did not save change pop up window if they would like to leave
        if (model.get('hasDirtyAttributes')) {
          let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");
          // if user wants to leave roolback
          if (confirmation) {
          model.rollbackAttributes();

            // if user does not want to leave page this is abort fucntion.
          } else {
             transition.about();
          }
        }
      }
    }
});
