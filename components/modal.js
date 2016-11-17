import React from 'react'
import Photo from './frame'
import { style } from 'next/css'

export default class extends React.Component {
  dismiss (e) {
    if (this._shim === e.target ||
       this._photoWrap === e.target) {
      if (this.props.onDismiss) {
        this.props.onDismiss()
      }
    }
  }

  render () {
    return (
      <div ref={el => (this._shim = el)} className={style(styles.shim)} onClick={(e) => this.dismiss(e)}>
        <div ref={el => (this._photoWrap = el)} className={style(styles.photo)}>
          <Photo id={this.props.id} url={this.props.url} />
        </div>
      </div>
    )
  }
}

const styles = {
  shim: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    flexFlow: 'row nowrap',
    background: 'rgba(0,0,0,.65)',
  },

  photo: {
    margin: 'auto',
  }
}
