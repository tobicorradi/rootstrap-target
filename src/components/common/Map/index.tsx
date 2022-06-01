import {
  Circle,
  MapContainer, Marker, TileLayer,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';
import LocationMarker from '../LocationMarker';
import NewTarget from '../NewTarget';
import { newTargetSelector, targetsSelector } from '../../../state/reducers/targetReducer';

const Map = () => {
  const targets = useSelector(targetsSelector);
  const newTarget = useSelector(newTargetSelector);
  return (
    <MapContainer center={[51.505, -0.09]} zoom={17} scrollWheelZoom>
      <TileLayer url={import.meta.env.VITE_MAP_URL} />
      <LocationMarker />
      {newTarget && (
        <>
          <NewTarget />
          <Circle
            weight={0}
            radius={newTarget.radius}
            fillOpacity={0.7}
            fillColor="#EFC638"
            center={[newTarget.lat, newTarget.lng]}
          />
        </>
      )}
      {targets && targets?.map(({ target: { lat, lng, radius } }) => (
        <>
          <Marker position={[lat, lng]} />
          <Circle
            weight={0}
            radius={radius}
            fillOpacity={0.7}
            fillColor="#EFC638"
            center={[lat, lng]}
          />
        </>
      ))}
    </MapContainer>
  );
};

export default Map;
