import L from 'leaflet'
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';


export default function ResetCenterView({location}) {
    const map = useMap();
  
    useEffect(() => {
      if (location) {
        map.setView(
          L.latLng(location[0], location[1]),
          map.getZoom(),
          {animate: true}
        )
      }
    }, [location, map])
    
  }
