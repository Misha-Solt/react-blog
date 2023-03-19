import { NavLink } from 'react-router-dom'
import styles from './menu.module.css'

const Menu = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="." end>
        BLOG
      </NavLink>
      <NavLink to="about">About</NavLink>
    </nav>
  )
}

export default Menu
