function getParameterByName(name, url) {
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}


var lang = getParameterByName('lang');
if (lang === null || lang === 'en')
{
  lang = 'en';
  var linklang = 'fr'
}
else {
  var linklang = 'en'
}
document.getElementById('langlink').setAttribute('href', '?lang='+linklang);
document.getElementById("anrsvp").setAttribute('src', 'https://daveandvan.anrsvp.com/'+lang+'/');


var getjson = $.getJSON(lang + '.json', function(json) {
	rivets.bind($('body'), {data: json})
});
