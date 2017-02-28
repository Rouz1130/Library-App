import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      books: this.store.findAll('book'),
      authors: this.store.findAll('author'),
      libraries: this.store.findAll('library')
    });
  },

  setupController(controller, model) {
    const books = model.books;
    const authors = model.authors;
    const libraries = model.libraries;

    this._super(controller, books);

    controller.set('authors', authors);
    controller.set('libraries', libraries);
  },

  actions: {

    editBook(book) {
      book.set('isEditing', true);
    },

    cancelBookEdit(book) {
      book.set('isEditing', false);
      book.rollbackAttributes();
    },

    saveBook(book) {
      if (book.get('isNotValid')) {
        return;
      }

      book.set('isEditing', false);
      book.save();
    },

    saveLibrary(library, book) {
      book.get('library').then((previousLibrary) => {
        previousLibrary.get('books').then((previousLibraryBooks) => {
          previousLibraryBooks.removeObject(book);
          previousLibrary.save();
        });
      });

      book.set('library', library);
      book.save().then(() => library.save());
      book.set('isLibraryEditing', false);
    }
  }
});
