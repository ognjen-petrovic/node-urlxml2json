var http = require('http');
var events = require('events');
var util = require('util');
var parser = require('xml2json');

function urlxml2json(xmlurl){
	events.EventEmitter.call(this);	
	this.xml = '';
	this.json = '';
	this.xmlurl = xmlurl;
}

util.inherits(urlxml2json, events.EventEmitter);

urlxml2json.prototype.get = function(){
	var _this = this;
	var req = http.get(_this.xmlurl, function(res){
		res.on('data', function (chunk){
			if (res.statusCode == 200){
				_this.xml += chunk;
			}		
		});

		res.on('end', function(){
    		_this.emit('end', parser.toJson(_this.xml));
		});

	});
}

module.exports = urlxml2json;
