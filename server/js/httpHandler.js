const headers = require('./cors');
const data = require('./messageQueue').data;

// how to get data over to client correctly?
// put in res.end()!! put direction in res.end()!!
// what's in res.end() is what is esentially "returned"
// from ajax request
module.exports = (req, res) => {
  res.writeHead(200, headers);
  var directions = ['up', 'down', 'left', 'right'];
  
  setInterval(() => {
    var index = Math.floor(Math.random() * directions.length);
    var direction = directions[index];
    res.end(direction);
  }, 25);
  //var direction = directions[index];
  // res.end(direction);
};
