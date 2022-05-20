import {
  MapContainer, Marker, Popup, TileLayer,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { envVariables } from '../../../constants/envVariables';

function Map() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={17} scrollWheelZoom>
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/tobicorradi/cl3el2qne000o15pkcygzhmbq/tiles/{z}/{x}/{y}?access_token=${envVariables.MAP_TOKEN}`}
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
