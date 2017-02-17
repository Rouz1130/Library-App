import Ember from 'ember';

export default Ember.Controller.extend({
  isDisabled: true,

  // value variable/property we set in input box
  emailAddress: '',
  // the computed property only changes when you go and use that property
  actualEmailAddress: Ember.computed('emailAddress', function() {
    console.log('actualEmailAddress function is called', this.get('emailAddress'));
  }),
  // Observers will always be called when the value of emailAddress changes.
  emailAddressChanged: Ember.observer('emailAddress', function(){
    console.log('observer is called', this.get('emailAddress'));
  })
});

// this are good to check in the console log in the ember inspector by going to routes and clicking on $E this.get('emailAddress') ...........or same for this set.
