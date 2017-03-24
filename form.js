$('#info-fr').summernote({
  fontNames: ['Rouge Script', 'Julius Sans One'],
  fontNamesIgnoreCheck: ['Rouge Script', 'Julius Sans One'],
  defaultFontName: 'Julius Sans One'
});
$('#info-en').summernote({
  fontNames: ['Rouge Script', 'Julius Sans One'],
  fontNamesIgnoreCheck: ['Rouge Script', 'Julius Sans One'],
    defaultFontName: 'Julius Sans One'

});
var getjson = $.getJSON('en.json', function(jsonen) {
	var getjson = $.getJSON('fr.json', function(jsonfr) {
		rivets.bind($('body'), {datafr: jsonfr, dataen: jsonen})
	});
});

