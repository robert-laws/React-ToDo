var moment = require('moment');

console.log(moment().format());

// January 1, 1970 @12:00am -> 0
// January 1, 1970 @12:01am -> 60

var now = moment();

console.log('Current Timestamp -', now.unix());

var timestamp = 1487612098;
var currentMoment = moment.unix(timestamp);

console.log('current moment -', currentMoment.format());

console.log('current moment -', currentMoment.format("MMM DD, YYYY @ h:mm a"));

// January 3rd, 2016 @ 12:14 AM
console.log('current moment -', currentMoment.format("MMMM Do, YYYY @ h:mm A"));
