import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RouterPaths, Colors } from '../../../constants';
import { newTargetCoordinates } from '../../../state/actions/targetAction';
import { newTargetSelector } from '../../../state/reducers/targetReducer';
import Target from '../Target';

const NewTarget = () => {
  const map = useMap();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { lat, lng, radius } = useSelector(newTargetSelector);

  useEffect(() => {
    map.on('click', (e) => {
      navigate(RouterPaths.CREATE_TARGET);
      dispatch(newTargetCoordinates(e.latlng));
    });
  }, []);

  return lat && lng ? (
    <Target
      lat={lat}
      lng={lng}
      radius={radius || 0}
      fillColor={Colors.YELLOW}
    />
  ) : null;
};

export default NewTarget;
