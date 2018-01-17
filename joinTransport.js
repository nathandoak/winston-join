var winston = require('winston');
var fetch = require('node-fetch');
var util = require('util');

function JoinTransport (ApiKey, Options) {
    var apiKey = ApiKey;
    var options = Options;


}

util.inherits(JoinTransport, winston.Transport);

JoinTransport.prototype.log = function (level, message, meta, callback) {
    console.log(message);
    callback(null, true);
}


module.exports = JoinTransport;
