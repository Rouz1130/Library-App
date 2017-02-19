import Ember from 'ember';


export default Ember.Controller.extend({

  // refactored took disabled computed property out.  brouht in isValidEmail email add but changed it to isValid for the contact page stays same in index. Added message.length for atleast 5 characters with computed property
 isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
 // compute.gte is not type its note suppose to be get: stands for greater or = too
 isMessageEnoughLong: Ember.computed.gte('message.length', 5),
 // .length obviously checking the whole message length too make sure its at least 5 characters

// combines both abobe computed property note:: Compuetd.and, the and is when you combine both computedProperties above when there = true
 isValid: Ember.computed.and('isValidEmail', 'isMessageEnoughLong'),



  actions: {
    sendMessage: function() {
      // setting variables for sendMessage fucntion
      var email = this.get('emailAddress');
                  // getter for our declared variables
      var message = this.get('message');

      alert('Sending your message in progress....');

      // our new variable responseMessage concats email with message
      var responseMessage = 'To: ' + email + ', Message: ' + message;

      // we now set our variables that we set.
      // notice emailAddress and message have an empty string that is to allow user input cause we obv dont know what there inputting.
      this.set('responseMessage', responseMessage);
      this.set('emailAddress', '');
      this.set('message');
    }
  }
});
