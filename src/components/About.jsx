import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Contacts from './aboutComponents/Contacts/Contacts'
import Education from './aboutComponents/Education'
import Hero from './aboutComponents/Hero'
import Certificates from './aboutComponents/Certificates'
import WorkExp from './aboutComponents/WorkExp'
import ScrollTop from './buttons/ScrollTop'
import styles from './about.module.css'
import { useLoadScript } from '@react-google-maps/api'
import Map from './aboutComponents/Map'

const About = () => {
  const hero = useRef()
  const education = useRef()
  const workExp = useRef()
  const certificates = useRef()
  const contacts = useRef()

  // Scroling on page
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  // GoogleMap component
  const { isLoaded } = useLoadScript({
    // This is not great way to save key. Learn more about: "googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,"
    googleMapsApiKey: 'key',
  })
  if (!isLoaded) return <div>Is loading...</div>

  return (
    <div className={styles.about}>
      <ScrollTop />
      <>
        <nav className={styles.nav}>
          <Link to="hero" onClick={() => scrollToSection(hero)}>
            Hero
          </Link>
          <Link to="education" onClick={() => scrollToSection(education)}>
            Education
          </Link>
          <Link to="experience" onClick={() => scrollToSection(workExp)}>
            Work experience
          </Link>
          <Link to="certificates" onClick={() => scrollToSection(certificates)}>
            Certificates
          </Link>
          <Link to="contacts" onClick={() => scrollToSection(contacts)}>
            Contacts
          </Link>
        </nav>
      </>
      <div ref={hero}>
        <Hero />
      </div>
      <div ref={education}>
        <Education />
      </div>
      <div ref={workExp}>
        <WorkExp />
      </div>
      <div ref={certificates}>
        <Certificates />
      </div>
      <div ref={contacts}>
        <Contacts />
      </div>
      <Map />
    </div>
  )
}

export default About
