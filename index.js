var express = require('express');
var request = require('request');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
	response.send('bot is alive!');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

function selfping() {
	request("http://[INSERT APP NAME HERE].herokuapp.com/", function(a,b,c){});
}
setInterval(selfping,1000*60*10);

// ========== insert your bot code after this! ==========
