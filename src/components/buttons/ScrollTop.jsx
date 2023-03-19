import { useEffect, useState } from 'react'
import { MdKeyboardDoubleArrowUp } from 'react-icons/md'
import styles from './scrollTop.module.css'

const ScrollTop = () => {
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowBtn(true)
      } else {
        setShowBtn(false)
      }
    })
  }, [])

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      {showBtn && (
        <MdKeyboardDoubleArrowUp className={styles.btn} onClick={scrollTop} />
      )}
    </div>
  )
}

export default ScrollTop
