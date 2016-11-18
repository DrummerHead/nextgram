import React from 'react'
import HeadPack from '../components/head-pack'
import Photo from '../components/frame'
import { style } from 'next/css'

export default ({ url: { query: { id, url } } }) => (
  <div>
    <HeadPack />

    <div className={style(styles.wrap)}>
      <Photo id={id} url={url} />
    </div>
  </div>
)

const styles = {
  wrap: {
    display: 'flex',
    height: 'calc(100vh - 3.9rem)',
    backgroundColor: '#ddd',
    overflow: 'hidden',
  }
}

