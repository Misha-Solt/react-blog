import { Link } from 'react-router-dom'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <Link>DATENSCHUTZ</Link>
        <Link>IMPRESSUM</Link>
      </div>
      <h3>Copyright © 2023 Max Mustermann</h3>
    </div>
  )
}

export default Footer
