import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { style, select } from 'next/css'

// We should have a way to add styles to Link components like:
// https://github.com/threepointone/glamor/blob/master/docs/howto.md#child-selectors
//
// How do I have permanent head features?
//
// is there an Application layout?

export default () => (
  <header className={style(styles.header)} data-class='app-header'>

    <Head>
      <link rel='stylesheet' href='/static/baseline.css' />
    </Head>

    <Link href='/'>nextagram</Link>
  </header>
)

const styles = {
  header: {
    boxSizing: 'border-box',
    height: '3.9rem',
    backgroundColor: '#000',
    color: '#fff',
    padding: '.75rem 1.5rem',
  }
}
