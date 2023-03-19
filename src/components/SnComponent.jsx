import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed'

import styles from './snComponent.module.css'

const SnComponent = () => {
  return (
    <div className={styles.sn}>
      <h3 className={styles.snHeader}>Social media activity...</h3>
      <div className={styles.snPosts}>
        <div>
          <InstagramEmbed
            url="https://www.instagram.com/p/Co0P2buDcbn/?utm_source=ig_embed&amp;utm_campaign=loading"
            width={330}
          />
        </div>
        <div>
          <InstagramEmbed
            url="https://www.instagram.com/p/CpyGHL6vU1N/?utm_source=ig_embed&amp;utm_campaign=loading"
            width={330}
          />
        </div>
        <div>
          <InstagramEmbed
            url="https://www.instagram.com/reel/CpxqW7WJcfP/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            width={330}
          />
        </div>
      </div>
    </div>
  )
}

export default SnComponent
