import { MapContainer, TileLayer} from 'react-leaflet';
import LocationMarker from './Displaymarker';
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import ResetCenterView from './ResetCenterView';

// styles
import "leaflet/dist/leaflet.css";

export default function Map({location}) {

  return (
  <MapContainer center={location} zoom={13} scrollWheelZoom={true} style={{height: 'calc(100vh - 300px)', width: '100vw', zIndex: 1}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LocationMarker location={location}/>
    <ResetCenterView location={location}/>
  </MapContainer>

  )
}
