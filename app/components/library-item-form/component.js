import Ember from 'ember';

export default Ember.Component.extend({
  buttonLabel: 'save',

  actions:  {
    buttonClicked(param) {
      this.sendAction('action', param);
    }
  }
});
