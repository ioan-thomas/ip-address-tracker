import { Marker, Popup} from "react-leaflet";
import { Icon } from "leaflet";


export default function LocationMarker({location}) {
  const myIcon = new Icon({
    iconUrl: "/icon-location.svg",
    iconSize: [30, 35]
  })
  return (

    <Marker position={location} icon={myIcon} />
  )
}
