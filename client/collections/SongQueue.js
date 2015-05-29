// SongQueue.js - Defines a backbone COLLECTION class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // this.on("add", function
    this.on("add", this.playCheck, this)
    // this.on("remove", this.pop, this)
    this.on("ended", this.stop, this)
    // this.on("enqueue", this.playCheck, this)
    this.on("dequeue", this.takeOff, this)
  },

  playCheck: function (){
    // console.log(this)
    if(this.models.length === 1){
      this.playFirst();
    }
  },

  playFirst: function(){
    this.at(0).play();
  },

  stop: function(){
    // this.remove();
    this.remove(this.at(0));
    console.log(this)
    if(this.at(0)){
      this.playFirst()
    }else{
      this.trigger('stop')
    }
  },

  takeOff: function(song){
    if(this.at(0)===song){
      this.stop();
    }else{
    this.remove(song)
    }
  }
});
