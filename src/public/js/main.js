let map = L.map('map-template').setView([3.3549438, -76.5141266], 15);

const tileURL = 'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png' 
const tileURL2 = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png';

const tile = L.tileLayer(tileURL2);

const url= "http://157.230.83.235:3000/api/getRoutes"

let response;

(async ()=>{
  this.response = await axios.get(url);
  console.log(this.response)
})()
// axios.get(url)
// .then(res=>{console.log(res)})
// .catch(err => {console.log(err)});

// let promise = fetch(url)
// .then(data => {return data.json()})
// .then(res=>{console.log(res)})
// //console.log(promise)


// Marker
const marker = L.marker([3.3549438, -76.5141266]); // kiev, ukraine
//marker.bindPopup('Hello There!');
map.addLayer(marker);

// // Geolocation
// map.locate({enableHighAccuracy: true})
// map.on('locationfound', (e) => {
//   const coords = [e.latlng.lat, e.latlng.lng];

//   console.log(e.latlng.lat, e.latlng.lng)
//   const newMarker = L.marker(coords);
//   newMarker.bindPopup('You are Here!');
//   map.addLayer(newMarker);

// });

map.addLayer(tile);