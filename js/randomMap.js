var maps = [
    'de_mirage',
    'de_dust2',
    'de_nuke',
    'de_inferno',
    'de_overpass',
    'de_train',
    'de_cache',
    'de_vertigo',
];

function randomMap(){
  var randomItem = maps[Math.floor(Math.random()*maps.length)];

  document.getElementById('map').innerHTML = randomItem;
};