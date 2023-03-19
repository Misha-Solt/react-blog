import React from 'react'
import { Icon, InlineIcon } from '@iconify/react'

import locationIcon from '@iconify/icons-mdi/map-marker-radius-outline'
import phoneIcon from '@iconify/icons-mdi/phone-outline'
import emailIcon from '@iconify/icons-mdi/email-multiple-outline'

import facebookIcon from '@iconify/icons-mdi/facebook'
import linkedinIcon from '@iconify/icons-mdi/linkedin'
import twitterIcon from '@iconify/icons-mdi/twitter'

import styles from './info.module.css'

const contactDetails = [
  {
    value: '80331 München, Hofbräuhaus, Platzl 9',
    icon: locationIcon,
  },
  { value: '+49 234 567 8900', icon: phoneIcon },
  { value: 'support@example.com', icon: emailIcon },
]

const renderContactDetails = () =>
  contactDetails.map((detail) => (
    <p key={detail.value} className={styles.infoDetail}>
      <InlineIcon icon={detail.icon} /> {detail.value}
    </p>
  ))

const renderIcons = () =>
  [facebookIcon, linkedinIcon, twitterIcon].map((icon, key) => (
    <Icon icon={icon} key={key} className={styles.infoIcon} />
  ))

const Info = () => (
  <section className={styles.info}>
    <h2>Contact information</h2>

    <div className={styles.infoDetailsContainer}>{renderContactDetails()}</div>

    <div className={styles.infoIconsContainer}>{renderIcons()}</div>
  </section>
)

export default Info
