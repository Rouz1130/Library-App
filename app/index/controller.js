import Ember from 'ember';

export default Ember.Controller.extend({


  // value variable/property we set in input box
  emailAddress: '',


  // predefined computed property function ember provides. **computed.empty** checks weather property is empy or not
  isDisabled: Ember.computed.empty('emailAddress')
});

//BELOW EXAMPLE IS COMPUTED PROPERTY WITHOUT BEING predefined. EXAMPLE SHOWS HOW predefined SAVES TIME

// isDisabled: Ember.computed('emailAddress', function() {
//     return this.get('emailAddress') === '';
//   })
