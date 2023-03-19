import { Outlet } from 'react-router-dom'
import Menu from '../components/menu/Menu'
import styles from './mainLayout.module.css'

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Menu />
      <Outlet />
    </div>
  )
}

export default MainLayout
