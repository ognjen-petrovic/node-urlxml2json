var http = require('http');
var events = require('events');
var util = require('util');
var parseString = require('xml2js').parseString;

function urlxml2json(xmlurl){
	console.log('urlxml2json')
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
			parseString(_this.xml, function (err, result) {
    			console.dir(result);
    			_this.emit('end', result);
			});

			
		});

	});
}

module.exports = urlxml2json;