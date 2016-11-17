import React from 'react'
import Photo from '../components/frame'
import { style, insertRule } from 'next/css'

export default ({ url: { query: { id, url } } }) => (
  <div className={style(styles.wrap)}>
    <Photo id={id} url={url} />
  </div>
)

// How do I get baseline css rules
// like this for the whole app?
insertRule('body { margin: 0 }')

const styles = {
  wrap: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#ddd',
  }
}

