var counter = $('#clickCount').text();
var source = Rx.Observable.fromEvent($('#myButton'), 'click')
  .subscribe(function(e) {
    $('#clickCount').text(++counter);
  });

var source2 = Rx.Observable.fromEvent($(document), 'mousemove')
  .map(function(event) {
    if (!(event.clientX > 200 && event.clientY > 200)) {
      event.isOutOfBounds = true;
    } else {
      event.isOutOfBounds = false;
    }
    return event;
  })
  .subscribe(function(event) {
    if (event.isOutOfBounds === true) {
      $('#results').text('Out of bounds.');

    } else {
      $('#results').text(event.clientX + ', ' + event.clientY);
    }

  });
