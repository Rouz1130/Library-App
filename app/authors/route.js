import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('author');
  },

  // Any time when we invoke an action, it passes the selected author record to that function as a parameter, so we can set isEditing on that record only.

  actions: {
  editAuthor(author) {
    author.set('isEditing', true);
  },

  cancelAuthorEdit(author) {
    author.set('isEditing', false);
    // In case of cancellation we revoke changes with rollbackAttributes
    author.rollbackAttributes();

  },

  saveAuthor(author) {
    if (author.get('isNotValid')) {
      return;
    }

    author.set('isEditing', false);
    author.save();
    }
  }
});
