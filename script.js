// ****************************************************************************

// Drag & Drop Starts

$(document).ready(function () {
  var a = 3;
  var lowOpacity = "80%";
  var highOpacity = "100%";

  $('.pdf,.txt,.folder,.jpg,.mp3').draggable({
    containment: '.dragZone',

    start: function (event, ui) {
      $(this).css("z-index", a++);
      $(this).css("opacity", lowOpacity);
    },

    stop: function (event, ui) {
      $(this).css("opacity", highOpacity);
    }
  });

  $('.dragZone div').click(function () {
    $(this).addClass('top').removeClass('bottom');
    $(this).siblings().removeClass('top').addClass('bottom');
    $(this).css("z-index", a++);
  });
});

// ----------------------------------------------------------------------

// Click/Drag Starts

// Click on Desktop Icons - Distinguish betweem drag and click
let zIndex = 10;

let hNav = document.querySelector('nav').clientHeight;
let hFooter = document.querySelector('footer').clientHeight;
let hBoundary = document.querySelector('.dragZone').clientHeight;
let wBoundary = document.querySelector('.dragZone').clientWidth;

// PDF files *************************************************************


// CV --------------------------------------------------------------------
$('#cv').on('mousedown', function () {
  $(this).data('p0', { x: event.pageX, y: event.pageY });
}).on('mouseup', function (event) {
  var p0 = $(this).data('p0'),
    p1 = { x: event.pageX, y: event.pageY },
    d = Math.sqrt(Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2));

  if (d < 4) { // distinguish between drag and click
    window.open("files/AlpArgun_CV.pdf", '_blank');
  }
});
// Start touch screen support
var ts_x;
var ts_y;
var cv_icon = $('#cv');
// Touch Start
cv_icon.bind('touchstart', function (e) {
  e.preventDefault();
  // get the location of the first touch
  ts_x = e.originalEvent.touches[0].clientX;
  ts_y = e.originalEvent.touches[0].clientY;
  $(this).css('z-index', zIndex++);
});
// Touch Move
cv_icon.bind('touchmove', function (e) {
  newX = e.originalEvent.touches[0].clientX;
  newY = e.originalEvent.touches[0].clientY;

  // Prevent dragging out of bounds
  let offsetX = document.querySelector('.pdf').clientWidth;
  let offsetY = document.querySelector('.pdf').clientHeight;

  // Set x position
  if (e.originalEvent.touches[0].clientX < 0) {
    $(this).css("left", 0);
  }
  else if (e.originalEvent.touches[0].clientX > wBoundary - offsetX) {
    $(this).css("left", screen.width - offsetX);
  }
  else {
    $(this).css("left", newX - offsetX / 2);
  }

  // Set y position
  if (e.originalEvent.touches[0].clientY < 0 + hNav) {
    $(this).css("top", 0 + hNav);
  }
  else if (e.originalEvent.touches[0].clientY > hBoundary - offsetY) {
    $(this).css("top", hBoundary - offsetY);
  }
  else {
    $(this).css("top", newY - offsetY / 2);
  }
});
// Touch End
cv_icon.bind('touchend', function (e) {
  var te_x = e.originalEvent.changedTouches[0].clientX;
  var te_y = e.originalEvent.changedTouches[0].clientY;

  dist = Math.sqrt(Math.pow(te_x - ts_x, 2) + Math.pow(te_y - ts_y, 2));

  if (dist < 4) { // distinguish between drag and click
    window.open("files/AlpArgun_CV.pdf", '_blank');
  }
});
// End touch screen support
// ---------------------------------------------------------------------------
// ***************************************************************************

// TXT files *****************************************************************

// About Me ------------------------------------------------------------------

$('#about-me').on('mousedown', function () {
  $(this).data('p0', { x: event.pageX, y: event.pageY });
}).on('mouseup', function (event) {
  var p0 = $(this).data('p0'),
    p1 = { x: event.pageX, y: event.pageY },
    d = Math.sqrt(Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2));

  if (d < 4) {
    $('#modal-about-me').modal('show');
  }
});
// Start touch screen support
var ts_x;
var ts_y;
var about_icon = $('#about-me');
// Touch Start
about_icon.bind('touchstart', function (e) {
  e.preventDefault();
  // get the location of the first touch
  ts_x = e.originalEvent.touches[0].clientX;
  ts_y = e.originalEvent.touches[0].clientY;
  $(this).css('z-index', zIndex++);
});
// Touch Move
about_icon.bind('touchmove', function (e) {
  newX = e.originalEvent.touches[0].clientX;
  newY = e.originalEvent.touches[0].clientY;

  // Prevent dragging out of bounds
  let offsetX = document.querySelector('.txt').clientWidth;
  let offsetY = document.querySelector('.txt').clientHeight;
  let hNav = document.querySelector('nav').clientHeight;
  let hFooter = document.querySelector('footer').clientHeight;

  // Set x position
  if (e.originalEvent.touches[0].clientX < 0) {
    $(this).css("left", 0);
  }
  else if (e.originalEvent.touches[0].clientX > screen.width - offsetX) {
    $(this).css("left", screen.width - offsetX);
  }
  else {
    $(this).css("left", newX - offsetX / 2);
  }

  // Set y position
  if (e.originalEvent.touches[0].clientY < 0 + hNav) {
    $(this).css("top", 0 + hNav);
  }
  else if (e.originalEvent.touches[0].clientY > hBoundary - offsetY) {
    $(this).css("top", hBoundary - offsetY);
  }
  else {
    $(this).css("top", newY - offsetY / 2);
  }
});
// Touch End
about_icon.bind('touchend', function (e) {
  var te_x = e.originalEvent.changedTouches[0].clientX;
  var te_y = e.originalEvent.changedTouches[0].clientY;

  dist = Math.sqrt(Math.pow(te_x - ts_x, 2) + Math.pow(te_y - ts_y, 2));

  if (dist < 4) { // distinguish between drag and click
    $('#modal-about-me').modal('show');
  }
});
// End touch screen support
// ----------------------------------------------------------------------------

// Projects  ------------------------------------------------------------------

$('#projects').on('mousedown', function () {
  $(this).data('p0', { x: event.pageX, y: event.pageY });
}).on('mouseup', function (event) {
  var p0 = $(this).data('p0'),
    p1 = { x: event.pageX, y: event.pageY },
    d = Math.sqrt(Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2));

  if (d < 4) {
    $('#modal-projects').modal('show');
  }
});
// Start touch screen support
var ts_x;
var ts_y;
var projects_icon = $('#projects');
// Touch Start
projects_icon.bind('touchstart', function (e) {
  e.preventDefault();
  // get the location of the first touch
  ts_x = e.originalEvent.touches[0].clientX;
  ts_y = e.originalEvent.touches[0].clientY;
  $(this).css('z-index', zIndex++);
});
// Touch Move
projects_icon.bind('touchmove', function (e) {
  newX = e.originalEvent.touches[0].clientX;
  newY = e.originalEvent.touches[0].clientY;

  // Prevent dragging out of bounds
  let offsetX = document.querySelector('.txt').clientWidth;
  let offsetY = document.querySelector('.txt').clientHeight;
  let hNav = document.querySelector('nav').clientHeight;
  let hFooter = document.querySelector('footer').clientHeight;

  // Set x position
  if (e.originalEvent.touches[0].clientX < 0) {
    $(this).css("left", 0);
  }
  else if (e.originalEvent.touches[0].clientX > screen.width - offsetX) {
    $(this).css("left", screen.width - offsetX);
  }
  else {
    $(this).css("left", newX - offsetX / 2);
  }

  // Set y position
  if (e.originalEvent.touches[0].clientY < 0 + hNav) {
    $(this).css("top", 0 + hNav);
  }
  else if (e.originalEvent.touches[0].clientY > hBoundary - offsetY) {
    $(this).css("top", hBoundary - offsetY);
  }
  else {
    $(this).css("top", newY - offsetY / 2);
  }
});
// Touch End
projects_icon.bind('touchend', function (e) {
  var te_x = e.originalEvent.changedTouches[0].clientX;
  var te_y = e.originalEvent.changedTouches[0].clientY;

  dist = Math.sqrt(Math.pow(te_x - ts_x, 2) + Math.pow(te_y - ts_y, 2));

  if (dist < 4) { // distinguish between drag and click

    $('#modal-projects').modal('show');
  }
});

// README ---------------------------------------------------------------------

$('#read-me').on('mousedown', function () {
  $(this).data('p0', { x: event.pageX, y: event.pageY });
}).on('mouseup', function (event) {
  var p0 = $(this).data('p0'),
    p1 = { x: event.pageX, y: event.pageY },
    d = Math.sqrt(Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2));

  if (d < 4) {
    $('#modal-read-me').modal('show');
  }
});
// Start touch screen support
var ts_x;
var ts_y;
var readme_icon = $('#read-me');
// Touch Start
readme_icon.bind('touchstart', function (e) {
  e.preventDefault();
  // get the location of the first touch
  ts_x = e.originalEvent.touches[0].clientX;
  ts_y = e.originalEvent.touches[0].clientY;
  $(this).css('z-index', zIndex++);
});
// Touch Move
readme_icon.bind('touchmove', function (e) {
  newX = e.originalEvent.touches[0].clientX;
  newY = e.originalEvent.touches[0].clientY;

  // Prevent dragging out of bounds
  let offsetX = document.querySelector('.txt').clientWidth;
  let offsetY = document.querySelector('.txt').clientHeight;
  let hNav = document.querySelector('nav').clientHeight;
  let hFooter = document.querySelector('footer').clientHeight;

  // Set x position
  if (e.originalEvent.touches[0].clientX < 0) {
    $(this).css("left", 0);
  }
  else if (e.originalEvent.touches[0].clientX > screen.width - offsetX) {
    $(this).css("left", screen.width - offsetX);
  }
  else {
    $(this).css("left", newX - offsetX / 2);
  }

  // Set y position
  if (e.originalEvent.touches[0].clientY < 0 + hNav) {
    $(this).css("top", 0 + hNav);
  }
  else if (e.originalEvent.touches[0].clientY > hBoundary - offsetY) {
    $(this).css("top", hBoundary - offsetY);
  }
  else {
    $(this).css("top", newY - offsetY / 2);
  }
});
// Touch End
readme_icon.bind('touchend', function (e) {
  var te_x = e.originalEvent.changedTouches[0].clientX;
  var te_y = e.originalEvent.changedTouches[0].clientY;

  dist = Math.sqrt(Math.pow(te_x - ts_x, 2) + Math.pow(te_y - ts_y, 2));

  if (dist < 4) { // distinguish between drag and click
    $('#modal-read-me').modal('show');
  }
});
// End touch screen support
// -------------------------------------------------------------------------------


// MP3 files *********************************************************************

song1 = $("#modal-song1 audio");
song2 = $("#modal-song2 audio");

// Song 1 -------------------------------------------------------------------------
$('#song1').on('mousedown', function () {
  $(this).data('p0', { x: event.pageX, y: event.pageY });
}).on('mouseup', function (event) {
  var p0 = $(this).data('p0'),
    p1 = { x: event.pageX, y: event.pageY },
    d = Math.sqrt(Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2));

  if (d < 4) {
    $('#modal-song1').modal('show');
  }
});
// Start touch screen support
var ts_x;
var ts_y;
var song1_icon = $('#song1');
// Touch Start
song1_icon.bind('touchstart', function (e) {
  e.preventDefault();
  // get the location of the first touch
  ts_x = e.originalEvent.touches[0].clientX;
  ts_y = e.originalEvent.touches[0].clientY;
  $(this).css('z-index', zIndex++);
});
// Touch Move
song1_icon.bind('touchmove', function (e) {
  newX = e.originalEvent.touches[0].clientX;
  newY = e.originalEvent.touches[0].clientY;

  // Prevent dragging out of bounds
  let offsetX = document.querySelector('.mp3').clientWidth;
  let offsetY = document.querySelector('.mp3').clientHeight;
  let hNav = document.querySelector('nav').clientHeight;
  let hFooter = document.querySelector('footer').clientHeight;

  // Set x position
  if (e.originalEvent.touches[0].clientX < 0) {
    $(this).css("left", 0);
  }
  else if (e.originalEvent.touches[0].clientX > screen.width-offsetX) {
    $(this).css("left", screen.width-offsetX);
  }
  else {
    $(this).css("left", newX - offsetX / 2);
  }

  // Set y position
  if (e.originalEvent.touches[0].clientY < 0 + hNav) {
    $(this).css("top", 0 + hNav);
  }
  else if (e.originalEvent.touches[0].clientY > hBoundary - offsetY) {
    $(this).css("top", hBoundary - offsetY);
  }
  else {
    $(this).css("top", newY - offsetY / 2);
  }
});
// Touch End
song1_icon.bind('touchend', function (e) {
  var te_x = e.originalEvent.changedTouches[0].clientX;
  var te_y = e.originalEvent.changedTouches[0].clientY;

  dist = Math.sqrt(Math.pow(te_x - ts_x, 2) + Math.pow(te_y - ts_y, 2));

  if (dist < 4) { // distinguish between drag and click
    $('#modal-song1').modal('show');
  }
});
// End touch screen support

// Play the song automatically when the modal is opened
$('#modal-song1').on('show.bs.modal', function () {
  $("#modal-song1 audio").each(function () {
    //this.currentTime = 0; // Reset time
    this.play(); // Start playing
  });
})
// ------------------------------------------------------------------------------

// Song 2 -------------------------------------------------------------------------
$('#song2').on('mousedown', function () {
  $(this).data('p0', { x: event.pageX, y: event.pageY });
}).on('mouseup', function (event) {
  var p0 = $(this).data('p0'),
    p1 = { x: event.pageX, y: event.pageY },
    d = Math.sqrt(Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2));

  if (d < 4) {
    $('#modal-song2').modal('show');
  }
});
// Start touch screen support
var ts_x;
var ts_y;
var song2_icon = $('#song2');
// Touch Start
song2_icon.bind('touchstart', function (e) {
  e.preventDefault();
  // get the location of the first touch
  ts_x = e.originalEvent.touches[0].clientX;
  ts_y = e.originalEvent.touches[0].clientY;
  $(this).css('z-index', zIndex++);
});
// Touch Move
song2_icon.bind('touchmove', function (e) {
  newX = e.originalEvent.touches[0].clientX;
  newY = e.originalEvent.touches[0].clientY;

  // Prevent dragging out of bounds
  let offsetX = document.querySelector('.txt').clientWidth;
  let offsetY = document.querySelector('.txt').clientHeight;
  let hNav = document.querySelector('nav').clientHeight;
  let hFooter = document.querySelector('footer').clientHeight;

  // Set x position
  if (e.originalEvent.touches[0].clientX < 0) {
    $(this).css("left", 0);
  }
  else if (e.originalEvent.touches[0].clientX > screen.width-offsetX) {
    $(this).css("left", screen.width-offsetX);
  }
  else {
    $(this).css("left", newX - offsetX / 2);
  }

  // Set y position
  if (e.originalEvent.touches[0].clientY < 0 + hNav) {
    $(this).css("top", 0 + hNav);
  }
  else if (e.originalEvent.touches[0].clientY > hBoundary - offsetY) {
    $(this).css("top", hBoundary - offsetY);
  }
  else {
    $(this).css("top", newY - offsetY / 2);
  }
});
// Touch End
song2_icon.bind('touchend', function (e) {
  var te_x = e.originalEvent.changedTouches[0].clientX;
  var te_y = e.originalEvent.changedTouches[0].clientY;

  dist = Math.sqrt(Math.pow(te_x - ts_x, 2) + Math.pow(te_y - ts_y, 2));

  if (dist < 4) { // distinguish between drag and click
    $('#modal-song2').modal('show');
  }
});
// End touch screen support

// Play the song automatically when the modal is opened
$('#modal-song2').on('show.bs.modal', function () {
  $('#modal-song2 audio').each(function () {
    //this.currentTime = 0; // Reset time
    this.play(); // Start playing
  });
})
// ------------------------------------------------------------------------------

// Audio settings ---------------------------------------------------------------
// Pause audio when window is not on focus
window.onblur = function () {
  $('audio').each(function () {
    this.pause(); // Stop playing
  });
};

// Automatically stop other audio when an audio is played
document.addEventListener('play', function (e) {
  var audios = document.getElementsByTagName('audio');
  for (var i = 0, len = audios.length; i < len; i++) {
    if (audios[i] != e.target) {
      audios[i].pause();
      audios[i].currentTime = 0;
    }
  }
}, true);

// -------------------------------------------------------------------------------

// JPG files *********************************************************************

// Image 1 -----------------------------------------------------------------------
$('#jpg-alp1').on('mousedown', function () {
  $(this).data('p0', { x: event.pageX, y: event.pageY });
}).on('mouseup', function (event) {
  var p0 = $(this).data('p0'),
    p1 = { x: event.pageX, y: event.pageY },
    d = Math.sqrt(Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2));

  if (d < 4) {
    $('#modal-jpg-alp1').modal('show');
  }
});
// Start touch screen support
var ts_x;
var ts_y;
var jpg1_icon = $('#jpg-alp1');
// Touch Start
jpg1_icon.bind('touchstart', function (e) {
  e.preventDefault();
  // get the location of the first touch
  ts_x = e.originalEvent.touches[0].clientX;
  ts_y = e.originalEvent.touches[0].clientY;
  $(this).css('z-index', zIndex++);

});
// Touch Move
jpg1_icon.bind('touchmove', function (e) {
  newX = e.originalEvent.touches[0].clientX;
  newY = e.originalEvent.touches[0].clientY;

  // Prevent dragging out of bounds
  let offsetX = document.querySelector('.jpg').clientWidth;
  let offsetY = document.querySelector('.jpg').clientHeight;
  let hNav = document.querySelector('nav').clientHeight;
  let hFooter = document.querySelector('footer').clientHeight;

  // Set x position
  if (e.originalEvent.touches[0].clientX < 0) {
    $(this).css("left", 0);
  }
  else if (e.originalEvent.touches[0].clientX > screen.width-offsetX) {
    $(this).css("left", screen.width-offsetX);
  }
  else {
    $(this).css("left", newX - offsetX / 2);
  }

  // Set y position
  if (e.originalEvent.touches[0].clientY < 0 + hNav) {
    $(this).css("top", 0 + hNav);
  }
  else if (e.originalEvent.touches[0].clientY > hBoundary - offsetY) {
    $(this).css("top", hBoundary - offsetY);
  }
  else {
    $(this).css("top", newY - offsetY / 2);
  }
});
// Touch End
jpg1_icon.bind('touchend', function (e) {
  var te_x = e.originalEvent.changedTouches[0].clientX;
  var te_y = e.originalEvent.changedTouches[0].clientY;

  dist = Math.sqrt(Math.pow(te_x - ts_x, 2) + Math.pow(te_y - ts_y, 2));

  if (dist < 4) { // distinguish between drag and click
    $('#modal-jpg-alp1').modal('show');
  }
});
// End touch screen support
// -------------------------------------------------------------------------------

// Image 2 -----------------------------------------------------------------------
$('#jpg-alp2').on('mousedown', function () {
  $(this).data('p0', { x: event.pageX, y: event.pageY });
}).on('mouseup', function (event) {
  var p0 = $(this).data('p0'),
    p1 = { x: event.pageX, y: event.pageY },
    d = Math.sqrt(Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2));

  if (d < 4) {
    $('#modal-jpg-alp2').modal('show');
  }
});
// Start touch screen support
var ts_x;
var ts_y;
var jpg2_icon = $('#jpg-alp2');
// Touch Start
jpg2_icon.bind('touchstart', function (e) {
  e.preventDefault();
  // get the location of the first touch
  ts_x = e.originalEvent.touches[0].clientX;
  ts_y = e.originalEvent.touches[0].clientY;
  $(this).css('z-index', zIndex++);
});
// Touch Move
jpg2_icon.bind('touchmove', function (e) {
  newX = e.originalEvent.touches[0].clientX;
  newY = e.originalEvent.touches[0].clientY;

  // Prevent dragging out of bounds
  let offsetX = document.querySelector('.jpg').clientWidth;
  let offsetY = document.querySelector('.jpg').clientHeight;
  let hNav = document.querySelector('nav').clientHeight;
  let hFooter = document.querySelector('footer').clientHeight;

  // Set x position
  if (e.originalEvent.touches[0].clientX < 0) {
    $(this).css("left", 0);
  }
  else if (e.originalEvent.touches[0].clientX > screen.width-offsetX) {
    $(this).css("left", screen.width-offsetX);
  }
  else {
    $(this).css("left", newX - offsetX / 2);
  }

  // Set y position
  if (e.originalEvent.touches[0].clientY < 0 + hNav) {
    $(this).css("top", 0 + hNav);
  }
  else if (e.originalEvent.touches[0].clientY > hBoundary - offsetY) {
    $(this).css("top", hBoundary - offsetY);
  }
  else {
    $(this).css("top", newY - offsetY / 2);
  }
});
// Touch End
jpg2_icon.bind('touchend', function (e) {
  var te_x = e.originalEvent.changedTouches[0].clientX;
  var te_y = e.originalEvent.changedTouches[0].clientY;

  dist = Math.sqrt(Math.pow(te_x - ts_x, 2) + Math.pow(te_y - ts_y, 2));

  if (dist < 4) { // distinguish between drag and click
    $('#modal-jpg-alp2').modal('show');
  }
});

// End touch screen support
// -----------------------------------------------------------------------------------

//  Click/Drag Ends ******************************************************************

// ***********************************************************************************

// Dynamic Time and Day Starts

// Show time and day dynamically on the navbar
function startTime() {
  var today = new Date();

  var weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

  var d = weekday[today.getDay()];
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =
    d + " " + h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}

// Time and Day Ends

// ----------------------------------------------------------------------

// Dock Effects Starts

// Instagram
$("#instagram").hover(
  function () { // hover on
    $("#instagram").css("transition", "all .2s ease-in-out");
    $("#instagram img").css("transform", "scale(3)");
    $("#instagram img").css("transform-origin", "bottom");

    $("#facebook").css("transition", "all .2s ease-in-out");
    $("#facebook img").css("transform", "scale(1.75)");
    $("#facebook img").css("transform-origin", "bottom");
    $("#facebook").css("margin-left", "25px");
  },
  function () { // hover off
    $("#instagram").css("transition", "all .2s ease-in-out");
    $("#instagram img").css("transform", "scale(1)");
    $("#instagram img").css("transform-origin", "bottom");

    $("#facebook").css("transition", "all .2s ease-in-out");
    $("#facebook img").css("transform", "scale(1)");
    $("#facebook img").css("transform-origin", "bottom");
    $("#facebook").css("margin-left", "0px");
  }
);

// Facebook
$("#facebook").hover(
  function () { // hover on
    $("#facebook").css("transition", "all .2s ease-in-out");
    $("#facebook img").css("transform", "scale(3)");
    $("#facebook img").css("transform-origin", "bottom");

    $("#twitter").css("transition", "all .2s ease-in-out");
    $("#twitter img").css("transform", "scale(1.75)");
    $("#twitter img").css("transform-origin", "bottom");
    $("#twitter").css("margin-left", "25px");

    $("#instagram").css("transition", "all .2s ease-in-out");
    $("#instagram img").css("transform", "scale(1.75)");
    $("#instagram img").css("transform-origin", "bottom");
    $("#instagram").css("margin-right", "25px");
  },
  function () { // hover off
    $("#facebook").css("transition", "all .2s ease-in-out");
    $("#facebook img").css("transform", "scale(1)");
    $("#facebook img").css("transform-origin", "bottom");

    $("#twitter").css("transition", "all .2s ease-in-out");
    $("#twitter img").css("transform", "scale(1)");
    $("#twitter img").css("transform-origin", "bottom");
    $("#twitter").css("margin-left", "0px");

    $("#instagram").css("transition", "all .2s ease-in-out");
    $("#instagram img").css("transform", "scale(1)");
    $("#instagram img").css("transform-origin", "bottom");
    $("#instagram").css("margin-right", "0px");
  }
);


// Twitter
$("#twitter").hover(
  function () { // hover on
    $("#twitter").css("transition", "all .2s ease-in-out");
    $("#twitter img").css("transform", "scale(3)");
    $("#twitter img").css("transform-origin", "bottom");

    $("#linkedin").css("transition", "all .2s ease-in-out");
    $("#linkedin img").css("transform", "scale(1.75)");
    $("#linkedin img").css("transform-origin", "bottom");
    $("#linkedin").css("margin-left", "25px");

    $("#facebook").css("transition", "all .2s ease-in-out");
    $("#facebook img").css("transform", "scale(1.75)");
    $("#facebook img").css("transform-origin", "bottom");
    $("#facebook").css("margin-right", "25px");
  },
  function () { // hover off
    $("#twitter").css("transition", "all .2s ease-in-out");
    $("#twitter img").css("transform", "scale(1)");
    $("#twitter img").css("transform-origin", "bottom");

    $("#linkedin").css("transition", "all .2s ease-in-out");
    $("#linkedin img").css("transform", "scale(1)");
    $("#linkedin img").css("transform-origin", "bottom");
    $("#linkedin").css("margin-left", "0px");

    $("#facebook").css("transition", "all .2s ease-in-out");
    $("#facebook img").css("transform", "scale(1)");
    $("#facebook img").css("transform-origin", "bottom");
    $("#facebook").css("margin-right", "0px");
  }
);

// Linkedin
$("#linkedin").hover(
  function () { // hover on
    $("#linkedin").css("transition", "all .2s ease-in-out");
    $("#linkedin img").css("transform", "scale(3)");
    $("#linkedin img").css("transform-origin", "bottom");

    $("#github").css("transition", "all .2s ease-in-out");
    $("#github img").css("transform", "scale(1.75)");
    $("#github img").css("transform-origin", "bottom");
    $("#github").css("margin-left", "25px");

    $("#twitter").css("transition", "all .2s ease-in-out");
    $("#twitter img").css("transform", "scale(1.75)");
    $("#twitter img").css("transform-origin", "bottom");
    $("#twitter").css("margin-right", "25px");
  },
  function () { // hover off
    $("#linkedin").css("transition", "all .2s ease-in-out");
    $("#linkedin img").css("transform", "scale(1)");
    $("#linkedin img").css("transform-origin", "bottom");

    $("#github").css("transition", "all .2s ease-in-out");
    $("#github img").css("transform", "scale(1)");
    $("#github img").css("transform-origin", "bottom");
    $("#github").css("margin-left", "0px");

    $("#twitter").css("transition", "all .2s ease-in-out");
    $("#twitter img").css("transform", "scale(1)");
    $("#twitter img").css("transform-origin", "bottom");
    $("#twitter").css("margin-right", "0px");
  }
);

// GitHub
$("#github").hover(
  function () { // hover on
    $("#github").css("transition", "all .2s ease-in-out");
    $("#github img").css("transform", "scale(3)");
    $("#github img").css("transform-origin", "bottom");

    $("#mail").css("transition", "all .2s ease-in-out");
    $("#mail img").css("transform", "scale(1.75)");
    $("#mail img").css("transform-origin", "bottom");
    $("#mail").css("margin-left", "25px");

    $("#linkedin").css("transition", "all .2s ease-in-out");
    $("#linkedin img").css("transform", "scale(1.75)");
    $("#linkedin img").css("transform-origin", "bottom");
    $("#linkedin").css("margin-right", "25px");
  },
  function () { // hover off
    $("#github").css("transition", "all .2s ease-in-out");
    $("#github img").css("transform", "scale(1)");
    $("#github img").css("transform-origin", "bottom");

    $("#mail").css("transition", "all .2s ease-in-out");
    $("#mail img").css("transform", "scale(1)");
    $("#mail img").css("transform-origin", "bottom");
    $("#mail").css("margin-left", "0px");

    $("#linkedin").css("transition", "all .2s ease-in-out");
    $("#linkedin img").css("transform", "scale(1)");
    $("#linkedin img").css("transform-origin", "bottom");
    $("#linkedin").css("margin-right", "0px");
  }
);

// Mail
$("#mail").hover(
  function () { // hover on
    $("#mail").css("transition", "all .2s ease-in-out");
    $("#mail img").css("transform", "scale(3)");
    $("#mail img").css("transform-origin", "bottom");

    $("#github").css("transition", "all .2s ease-in-out");
    $("#github img").css("transform", "scale(1.75)");
    $("#github img").css("transform-origin", "bottom");
    $("#github").css("margin-right", "25px");
  },
  function () { // hover off
    $("#mail").css("transition", "all .2s ease-in-out");
    $("#mail img").css("transform", "scale(1)");
    $("#mail img").css("transform-origin", "bottom");

    $("#github").css("transition", "all .2s ease-in-out");
    $("#github img").css("transform", "scale(1)");
    $("#github img").css("transform-origin", "bottom");
    $("#github").css("margin-right", "0px");
  }
);

// Dock Effects Ends

// ----------------------------------------------------------------------
