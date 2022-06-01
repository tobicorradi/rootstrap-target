import {
  Circle,
  MapContainer, Marker, TileLayer,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import LocationMarker from '../LocationMarker';
import NewTarget from '../NewTarget';

const Map = () => {
  const MOCK = [
    {
      target: {
        id: 3,
        title: 'new target',
        lat: -34.60558124333073,
        lng: -58.45071422798693,
        radius: 234,
        topic_id: 2,
      },
    },
    {
      target: {
        id: 3,
        title: 'new target',
        lat: -34.60881321702712,
        lng: -58.4447162690486,
        radius: 163,
        topic_id: 2,
      },
    },
  ];

  return (
    <MapContainer center={[51.505, -0.09]} zoom={17} scrollWheelZoom>
      <TileLayer
        url={import.meta.env.VITE_MAP_URL}
      />
      <LocationMarker />
      <NewTarget />
      {MOCK && MOCK?.map(({ target: { lat, lng, radius } }) => (
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
