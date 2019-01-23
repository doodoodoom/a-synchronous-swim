// how to get IIFE from httpFetcher to run without copypasting?
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

// how to get data from server?
// use get instead of ajax (definitely can use ajax, but keep it simple buddy!).
// get from url, define function argument with direction argument to grab info 
// from server. use that argument to pass into SwimTeam.move()
$('button').on('click', () => {
  (function() {

    $.get('http://127.0.0.1:3000', (direction) => {
      SwimTeam.move(direction);
    });
  
    
  
  })();
});

console.log('Client is running in the browser!');
