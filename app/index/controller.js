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
      var newInvitation = this.store.createRecord('invitation', { email:email
      });
      // Promise: .save() promise: unique asynchronous feature in javascript. Basically, they’re objects that haven’t completed yet, but are expected to in the future
      // promises us that it is trying to save our data. It could be successful or maybe return with an error.

      // .then catch the result of the promise with .then() which is a chained fucntion
      newInvitation.save().then((response) => {
        this.set('responseMessage', "Thank you! We saved your email address with the following id: " + response.get('id'));
        this.set('emailAddress', '');
      });
  }
}
});
