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

function print(url){
  var wnd = window.open(url);
  wnd.print();
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
document.getElementById('map-link').setAttribute('href', 'map-'+lang+'.pdf');
document.getElementById("anrsvp").setAttribute('src', 'https://daveandvan.anrsvp.com/'+lang+'/');
if(lang === 'fr'){
  document.getElementById("google").setAttribute('src', 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyDKRx6XBs8Jy3dWKBe4MuHhawFFV5fej8A&origin=Bathurst+NB&destination=Solomon+Gardens+NB&zoom=8&language='+lang);
  document.getElementById("map-link").setAttribute('onclick', 'print("map-fr.pdf")');

}
else{
  document.getElementById("google").setAttribute('src', 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyDKRx6XBs8Jy3dWKBe4MuHhawFFV5fej8A&origin=Halifax+NS&destination=Solomon+Gardens+NB&zoom=8');
  document.getElementById("map-link").setAttribute('onclick', 'print("map-en.pdf")');
}
var getjson = $.getJSON(lang + '.json', function(json) {
  rivets.bind($('body'), {data: json, lang: lang})
});
