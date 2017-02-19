import DS from 'ember-data';

// ember g model invitation email:string........adding email:string it automatically generates the value in our Model

export default DS.Model.extend({
  email: DS.attr('string')
});
