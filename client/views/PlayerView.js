// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',
  // events:{
  //   'ended': 'setSong'
  // },

  initialize: function() {
    this.model.on("play", this.setSong, this)
  },
  events:{
    'ended': function(){this.model.ended()}
  },

  setSong: function(song){
    // if(this.length>1){
    //  this.takeOff();
    //  console.log(this)
    // }'

    this.model = song;
    this.render();
  },

  takeOff: function(){
    this.remove(this.first)
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }
//should dequeue song and go to next in queue

});
