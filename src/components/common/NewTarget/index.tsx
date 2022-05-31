import { useEffect, useState } from 'react';
import { Marker, useMap } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import { newTargetIcon, RouterPaths } from '../../../constants';

const NewTarget = () => {
  const map = useMap();
  const navigate = useNavigate();

  const [position, setPosition] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    map.on('click', (e) => {
      navigate(RouterPaths.CREATE_TARGET);
      setPosition(e.latlng);
    });
  }, []);

  return <Marker position={position} icon={newTargetIcon} />;
};

export default NewTarget;
