import { useEffect, useState } from 'react';
import { Circle, Marker, useMap } from 'react-leaflet';
import { Colors, customLocationIcon } from '../../../constants';

const LocationMarker = () => {
  const map = useMap();
  const [position, setPosition] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    map.locate().on('locationfound', (e) => {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom(), { animate: false });
    });
  }, []);

  return position && (
    <>
      <Circle
        weight={2}
        radius={34}
        fillOpacity={0.7}
        color={Colors.YELLOW}
        fillColor="#ffffff"
        center={position}
      />
      <Marker position={position} icon={customLocationIcon} />
    </>
  );
};

export default LocationMarker;
