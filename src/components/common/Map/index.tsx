import {
  MapContainer, Marker, Popup, TileLayer,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { envVariables } from '../../../constants/envVariables';

function Map() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={17} scrollWheelZoom>
      <TileLayer
        url={envVariables.MAP_TOKEN}
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          I am a Popup
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
