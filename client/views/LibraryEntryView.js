// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),


  events: {
    'click': function() {
      //if nothing else playing
      this.model.enqueue()
      // this.model.play()
    }
  },

  //if model changes...render that shit
//Add ability to queue clicked song
  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
