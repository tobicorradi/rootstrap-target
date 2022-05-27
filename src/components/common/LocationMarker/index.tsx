import { useEffect, useState } from 'react';
import { Marker, useMap } from 'react-leaflet';
import { customLocationIcon } from '../../../constants';

function LocationMarker() {
  const map = useMap();
  const [position, setPosition] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    map.locate().on('locationfound', (e) => {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom(), { animate: false });
    });
  }, []);

  return position && <Marker position={position} icon={customLocationIcon} />;
}

export default LocationMarker;
