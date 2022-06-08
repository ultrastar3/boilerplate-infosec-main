var express = require('express');
var app = express();
var helmet = require('helmet');

app.use(helmet());

app.use(
  helmet.frameguard({
    action: "deny",
  }),
  helmet.hidePoweredBy(),
  helmet.xssFilter(),
  helmet.noSniff()
 );
















































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
