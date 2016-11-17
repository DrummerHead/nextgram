import React from 'react'
import Link from 'next/link'
import { style } from 'next/css'

export default ({ id, url }) => (
  <div className={style(styles.photo)}>
    <div className={style(styles.main)}>
      <img src={url} alt={id} className={style(styles.image)} />
    </div>

    <aside className={style(styles.sidebar)}>
      <ul className={style(styles.sidebarList)}>
        <li>
          <Link href='/profile?id=nkzawa'>@nkzawa</Link>
          - Great photo!
        </li>
      </ul>
    </aside>
  </div>
)

const styles = {
  photo: {
    width: '800px',
    overflow: 'hidden',
    height: '500px',
    display: 'inline-block'
  },

  main: {
    float: 'left',
    width: '600px',
    height: '500px',
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '500px',
    fontSize: '40px'
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },

  sidebar: {
    float: 'right',
    background: '#fff',
    width: '200px',
    height: '500px',
    textAlign: 'left',
    boxSizing: 'border-box',
    padding: '20px',
    fontFamily: 'Monaco',
    fontSize: '11px'
  },

  sidebarList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0
  }
}
