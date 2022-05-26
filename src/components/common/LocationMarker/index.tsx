import { useEffect, useState } from 'react';
import { Marker, useMap } from 'react-leaflet';
import customLocationIcon from '../../../constants/customLocationIcon';

function LocationMarker() {
  const map = useMap();
  const [position, setPosition] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    map.locate().on('locationfound', (e) => {
      const { lat } = e.latlng;
      const { lng } = e.latlng;
      setPosition({ lat, lng });
      map.flyTo({ lat, lng }, map.getZoom(), { animate: false });
    });
  }, []);

  if (!position) return null;

  return <Marker position={position} icon={customLocationIcon} />;
}

export default LocationMarker;
