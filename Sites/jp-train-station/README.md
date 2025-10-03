# Japan Station Explorer

This static experience highlights major JR stations with melodies on an interactive basemap.

## External dependencies

- **Leaflet** `@1.9.4` and **Leaflet.markercluster** `@1.5.3` are loaded via the official [unpkg CDN](https://unpkg.com/) and provide the map canvas and clustering UX.
- **OpenStreetMap raster tiles** (`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`) supply the basemap imagery; attribution is rendered inside the map.
- Station departure melodies reuse the MP3 assets that already live in `Sites/yamanoteline/sounds/`.

All dependencies are documented inline in `index.html` and `app.js` comments for quick reference.
