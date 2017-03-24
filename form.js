
var getjson = $.getJSON('en.json', function(jsonen) {
	var getjson = $.getJSON('fr.json', function(jsonfr) {
		rivets.bind($('body'), {datafr: jsonfr, dataen: jsonen})
	});
});

