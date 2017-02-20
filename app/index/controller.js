import Ember from 'ember';

export default Ember.Controller.extend({

  // we can {{yield teh headerMessage}}
  headerMessage: 'Coming Soon',
  responseMessage: '',
  emailAddress: '',


  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),


  actions: {
    sendInvitation: function() {
      var email = this.get('emailAddress');
      // this.store.createRecord is letting our server now to save the new email address associated with invitations variable.
      var newInvitation = this.store.createRecord('invitation', { email:email
      });
      // Promise: .save() promise: unique asynchronous feature in javascript. Basically, they’re objects that haven’t completed yet, but are expected to in the future
      // promises us that it is trying to save our data. It could be successful or maybe return with an error.

      // .then catch the result of the promise with .then() which is a chained fucntion

    // response => model from server sent to call back as response. the model object contains the ID of our model.
      newInvitation.save().then((response) => {
        // in javascript .this points to the object that wraps around it.
        this.set('responseMessage', "Thank you! We saved your email address with the following id: " + response.get('id'));
        this.set('emailAddress', '');
      });
  }
}
});
