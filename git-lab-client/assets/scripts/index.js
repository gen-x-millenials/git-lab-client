
'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled

const bookEvents = require('./book/book_events.js');
require('./example');

$(() => {
  $('head').append('<link rel="stylesheet" href="./assets/styles/style.css">');
  $('head').append("<link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css'>");
  bookEvents.addHandlers();
});
