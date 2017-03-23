
var getjson = $.getJSON('en.json', function(json) {
	rivets.bind($('#container'), {data: json})
});
