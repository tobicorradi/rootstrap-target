import { useEffect, useState } from 'react';
import { Marker, useMap } from 'react-leaflet';
import customLocationIcon from '../../../constants/customLocationIcon';

function LocationMarker() {
  const map = useMap();
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    map.locate().on('locationfound', (e) => {
      setPosition([e.latlng.lat, e.latlng.lng]);
      map.flyTo(e.latlng, map.getZoom(), { animate: false });
    });
  }, []);

  return position === null ? null : (
    <Marker position={position} icon={customLocationIcon} />
  );
}

export default LocationMarker;
