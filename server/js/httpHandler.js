const headers = require('./cors');
const data = require('./messageQueue').data;

module.exports = (req, res) => {
  res.writeHead(200, headers);
  console.log(data);
  res.end();
};
