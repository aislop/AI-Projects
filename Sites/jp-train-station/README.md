# JP Train Station

A full-screen rail atlas that lets visitors zoom across Japan, surface any station with an instant search bar, and trigger authentic arrival or departure melodies for each stop.

## External dependencies

- **Leaflet** `@1.9.4` and **Leaflet.markercluster** `@1.5.3` are loaded via the official [unpkg CDN](https://unpkg.com/) to power the responsive, clustered basemap experience.
- **OpenStreetMap HOT raster tiles** (`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`) supply the cartography. Attribution is rendered by Leaflet in the map corner.
- Station audio cues reuse the MP3 assets stored in `Sites/yamanoteline/sounds/`.

All dependencies are documented inline in `index.html` and `app.js` for quick reference.
