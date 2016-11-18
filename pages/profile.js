import React from 'react'
import HeadPack from '../components/head-pack'
import { style } from 'next/css'

export default ({ url: { query: { id } } }) => (
  <div className={style(styles.main)}>
    <HeadPack />

    <h1 className={style(styles.heading)}>
      User profile:
      {' '}
      <b className={style(styles.username)}>{id}</b>
    </h1>
  </div>
)

const styles = {
  heading: {
    font: '15px Monaco',
    margin: '1.9em 1.7em',
  },

  username: {
    color: '#424242'
  }
}
