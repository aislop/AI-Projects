# JP Train Station

A full-screen rail atlas that lets visitors zoom across Japan, surface any station with an instant search bar, and trigger authentic arrival or departure melodies for each stop.

## External dependencies

- **Leaflet** `@1.9.4` and **Leaflet.markercluster** `@1.5.3` are loaded via the official [unpkg CDN](https://unpkg.com/) to power the responsive, clustered basemap experience.
- **OpenStreetMap HOT raster tiles** (`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`) supply the cartography. Attribution is rendered by Leaflet in the map corner.

All dependencies are documented inline in `index.html` and `app.js` for quick reference.

## Audio assets

- National map cues live inside this project under `sounds/arrival/` and `sounds/departure/`, keeping the station data self-contained. Each track is referenced from `stations.json` using a relative path so the web app can load the appropriate melody without reaching across sites.
- Because the repository cannot store binary blobs, the `sounds/**/README.md` files list the exact MP3 filenames that must be added locally before running the site. Dropping the tracks in those folders preserves the paths already wired into `stations.json` and `app.js`.
- The dedicated Yamanote Line experience continues to read from `Sites/yamanoteline/sounds/`; there is no cross-linking between the two projects.
