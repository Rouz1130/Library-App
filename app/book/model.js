import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  string: DS.attr(),
  relaseYear: DS.attr(),
  date: DS.attr(),
  library: DS.belongsTo('library'),
  author: DS.attr(),
  belongsTo: DS.attr()
});
