import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import LocationMarker from '../LocationMarker';
import NewTarget from '../NewTarget';
import { targetsSelector } from '../../../state/reducers/targetReducer';
import Target from '../Target';
import { Colors } from '../../../constants';
import { list } from '../../../state/actions/targetAction';

const Map = () => {
  const dispatch = useDispatch();
  const targets = useSelector(targetsSelector);

  useEffect(() => {
    dispatch(list());
  }, []);

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
