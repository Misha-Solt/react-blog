import { GoogleMap, Marker } from '@react-google-maps/api'
import position from '../../data/positions'
import styles from './map.module.css'


const Map = () => {
  return (
    <GoogleMap
      zoom={19}
      center={position}
      mapContainerClassName={styles.map}
    >
      <Marker position={position} />
    </GoogleMap>
  )
}

export default Map
