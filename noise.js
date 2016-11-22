$(document).ready( function() {
  // $('.c').click(function(){
  //   var c3 = document.getElementById("cAudio")
  //   c3.play();
  //   c3.currentTime = 0;
  // })
  //
  // $('.d').click(function(){
  //   var d3 = document.getElementById("dAudio")
  //   d3.play();
  //   d3.currentTime = 0;
  // })
  //
  // $('.e').click(function(){
  //   var e3 = document.getElementById("eAudio")
  //   e3.play();
  //   e3.currentTime = 0;
  // })
  //
  // $('.f').click(function(){
  //   var f3 = document.getElementById("fAudio")
  //   f3.play();
  //   f3.currentTime = 0;
  // })
  //
  // $('.g').click(function(){
  //   var g3 = document.getElementById("gAudio")
  //   g3.play();
  //   g3.currentTime = 0;
  // })
  //
  // $('.a').click(function(){
  //   var a3 = document.getElementById("aAudio")
  //   a3.play();
  //   a3.currentTime = 0;
  // })

  var keys = ["c","d","e","f","g","a","b"]
  for (var i = 0; i < keys.length; i++) {
    $('.'+keys[i]).click( function(myCurrentKey) {
      return function(){
        console.log(myCurrentKey);
        var note = document.getElementById(keys[myCurrentKey]+"Audio")
        note.play();
        note.currentTime = 0;
      }}(i))
  }

  // for (var i = 0; i < keys.length; i++) {
    $('body').keydown( function(event){
      console.log(event.key);
      if (event.key == 'c') {myCurrentKey = 0};
      if (event.key == 'd') {myCurrentKey = 1};
      if (event.key == 'e') {myCurrentKey = 2};
      if (event.key == 'f') {myCurrentKey = 3};
      if (event.key == 'g') {myCurrentKey = 4};
      if (event.key == 'a') {myCurrentKey = 5};
      if (event.key == 'b') {myCurrentKey = 6}
      // else {
      //   myCurrentKey = 7;
      // }

      var assignment = function(myCurrentKey){
        var note = document.getElementById(keys[myCurrentKey]+"Audio")
        note.play();
        note.currentTime = 0;
      }
      return assignment(myCurrentKey);
    });
  // }

  // $('body').keydown( function(event){

  // })
});
