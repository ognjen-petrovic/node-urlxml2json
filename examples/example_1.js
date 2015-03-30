var urlxml2json = require('../lib/urlxml2json');

var x = new urlxml2json('http://www.xmlfiles.com/examples/cd_catalog.xml');
x.on('end', function(json){
	json = JSON.parse(json);
	for(var i=0; i < json.CATALOG.CD.length; ++i){
		console.log(json.CATALOG.CD[i].TITLE);
	}
});
x.get();
