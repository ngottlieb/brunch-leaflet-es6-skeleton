import L from 'leaflet';

export default class Map {
  constructor(props) {
    this.map = L.map('mapid').setView([51.505, -0.09], 13);
    // see here for other tileLayer providers:
    // https://leaflet-extras.github.io/leaflet-providers
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    this.addExampleMarker(this.map);
  }

  addExampleMarker(map) {
    const marker = L.marker([51.5, -0.09]).addTo(map);
    marker.bindPopup("<b>Hello World!</b><br />I am a popup.").openPopup();
  }
}
