
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

$('button').on('click', () => {
  (function() {

    const serverUrl = 'http://127.0.0.1:3000';
  
    $.ajax({
      url: serverUrl,
      type: 'GET',
      success: () => {
        console.log('I WORKED');
      },
      error: () => {
        console.log('I FAILED');
      }
    });
  
  })();
});

console.log('Client is running in the browser!');
