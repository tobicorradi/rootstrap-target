import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';
import LocationMarker from '../LocationMarker';
import NewTarget from '../NewTarget';
import { targetsSelector } from '../../../state/reducers/targetReducer';
import Target from '../Target';
import { Colors } from '../../../constants';

const Map = () => {
  const targets = useSelector(targetsSelector);
  return (
    <MapContainer center={[51.505, -0.09]} zoom={17} scrollWheelZoom>
      <TileLayer url={import.meta.env.VITE_MAP_URL} />
      <LocationMarker />
      <NewTarget />
      {targets && targets?.map(({ target: { lat, lng, radius } }) => (
        <Target
          lat={lat}
          lng={lng}
          radius={radius}
          fillColor={Colors.YELLOW}
          key={`${lat}-${lng}`}
        />
      ))}
    </MapContainer>
  );
};

export default Map;
