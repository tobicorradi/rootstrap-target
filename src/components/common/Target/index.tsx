import { Circle, Marker } from 'react-leaflet';

interface Props {
    radius: number,
    lat: number,
    lng: number,
    fillColor: string
}

const Target = ({
  radius, lat, lng, fillColor,
}: Props) => (
  <>
    <Marker position={[lat, lng]} />
    <Circle
      weight={0}
      radius={radius}
      fillOpacity={0.7}
      fillColor={fillColor}
      center={[lat, lng]}
    />
  </>
);

export default Target;
