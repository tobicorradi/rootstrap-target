import {
  MapContainer, TileLayer,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import LocationMarker from '../LocationMarker';

function Map() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={17} scrollWheelZoom>
      <TileLayer
        url={import.meta.env.VITE_MAP_URL}
      />
      <LocationMarker />
    </MapContainer>
  );
}

export default Map;
