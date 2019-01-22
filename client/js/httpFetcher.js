(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  $.ajax({
    url: serverUrl,
    type: 'GET',
    success: () => {
      var directions = ['up', 'down', 'left', 'right'];
      var index = Math.floor(Math.random() * directions.length);
      SwimTeam.move(directions[index]);
      console.log('I WORKED');
    }
  });

})();
