import { useEffect } from 'react';
import { Marker, useMap } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RouterPaths } from '../../../constants';
import { newTargetCoordinates } from '../../../state/actions/targetAction';
import { newTargetSelector } from '../../../state/reducers/targetReducer';

const NewTarget = () => {
  const map = useMap();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { lat, lng } = useSelector(newTargetSelector);

  useEffect(() => {
    map.on('click', (e) => {
      navigate(RouterPaths.CREATE_TARGET);
      dispatch(newTargetCoordinates(e.latlng));
    });
  }, []);

  return lat && lng && <Marker position={[lat, lng]} />;
};

export default NewTarget;
