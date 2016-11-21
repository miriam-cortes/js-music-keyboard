$(document).ready( function() {
  // var c3 = ("media/c_note.mp3")
  $('.c').click(function(){
    var c3 = document.getElementById("cAudio")
    c3.play();
    c3.currentTime = 0;
  })

  $('.d').click(function(){
    var d3 = document.getElementById("dAudio")
    d3.play();
    d3.currentTime = 0;
  })

  $('.e').click(function(){
    var e3 = document.getElementById("eAudio")
    e3.play();
    e3.currentTime = 0;
  })

  $('.f').click(function(){
    var f3 = document.getElementById("fAudio")
    f3.play();
    f3.currentTime = 0;
  })

  $('.g').click(function(){
    var g3 = document.getElementById("gAudio")
    g3.play();
    g3.currentTime = 0;
  })

  $('.a').click(function(){
    var a3 = document.getElementById("aAudio")
    a3.play();
    a3.currentTime = 0;
  })

  $('.b').click(function(){
    var b3 = document.getElementById("bAudio")
    b3.play();
    b3.currentTime = 0;
  })
});
