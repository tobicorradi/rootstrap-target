import {
  MapContainer, TileLayer,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { envVariables } from '../../../constants/envVariables';
import LocationMarker from '../LocationMarker';

function Map() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={17} scrollWheelZoom>
      <TileLayer
        url={envVariables.MAP_TOKEN}
      />
      <LocationMarker />
    </MapContainer>
  );
}

export default Map;
