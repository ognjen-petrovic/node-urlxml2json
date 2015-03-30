var urlxml2json = require('../lib/urlxml2json');

var x = new urlxml2json('http://www.xmlfiles.com/examples/cd_catalog.xml');
x.on('end', function(json){
	console.log(json);
});
x.get();