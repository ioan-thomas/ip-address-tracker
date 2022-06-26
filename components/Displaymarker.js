import { Marker, Popup} from "react-leaflet";

export default function LocationMarker({location}) {
  return (

    <Marker position={location}>
        <Popup>You are here</Popup>
    </Marker>
  )
}
