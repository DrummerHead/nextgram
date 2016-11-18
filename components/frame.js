import React from 'react'
import Link from 'next/link'
import { style } from 'next/css'

export default ({ id, url }) => (
  <div className={style(styles.frame)}>
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
  frame: {
    display: 'flex',
    flexFlow: 'row nowrap',
    width: '100%',
    height: '100%',
    margin: 'auto'
  },

  main: {
    flex: '0 1 75%',
    background: '#333',
    color: '#fff'
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },

  sidebar: {
    flex: '1 0 25%',
    background: '#fff',
    boxSizing: 'border-box',
    padding: '20px',
    fontFamily: 'Monaco',
    fontSize: '.8em'
  },

  sidebarList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0
  }
}
