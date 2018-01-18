var winston = require('winston');
var fetch = require('node-fetch');
var querystring = require('querystring');
var util = require('util');

function JoinTransport (ApiKey, Devices, Options) {
    if (!ApiKey) {
        throw "ApiKey is required";
    }

    if (!Devices) {
        throw "Device id(s) or group name is required";
    }

    this.apiData = Object.assign({ apikey: ApiKey, deviceId: Devices}, Options);
}

util.inherits(JoinTransport, winston.Transport);

JoinTransport.prototype.log = function (level, message, meta, callback) {
    this.apiData.text = message;
    this.apiData.title = level;

    fetch(`${this.apiUrl}?${querystring.stringify(this.apiData)}`)
        .then((response) => {
            //console.log(response.body);
        })
        .then(() => callback(null, true));
}

JoinTransport.prototype.apiUrl = 'https://joinjoaomgcd.appspot.com/_ah/api/messaging/v1/sendPush';

module.exports = JoinTransport;
