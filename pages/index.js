import React from 'react'
import Modal from '../components/modal'
import getPhotos from '../mock/photos.js'
import { style } from 'next/css'

const photosMockData = getPhotos();

export default class extends React.Component {
  static getInitialProps () {
    return {
      // dummy data
      photos: photosMockData
    }
  }

  constructor (props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  componentDidMount () {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown (e) {
    if (!this.props.url.query.id) return
    if (e.keyCode === 27) {
      this.props.url.back()
    }
  }

  dismissModal () {
    this.props.url.back()
  }

  showPhoto (e, photo) {
    e.preventDefault()
    this.props.url.push(`/photo?id=${photo.id}&url=${encodeURIComponent(photo.url)}`)
  }

  render () {
    return (
      <div className={style(styles.list)}>
        {
          this.props.url.query.id &&
            <Modal
              id={this.props.url.query.id}
              url={this.props.url.query.url}
              onDismiss={() => this.dismissModal()}
            />
        }
        {
          this.props.photos.map((photo) => (
            <div key={photo.id} className={style(styles.photo)}>
              <a
                className={style(styles.photoLink)}
                href={'/photo?id=' + photo.id}
                onClick={(e) => this.showPhoto(e, photo)}>
                <img src={photo.url} alt={photo.id} className={style(styles.thumb)}/>
              </a>
            </div>
          ))
        }
      </div>
    )
  }
}

const styles = {
  list: {
    padding: '50px',
    textAlign: 'center'
  },

  photo: {
    display: 'inline-block'
  },

  photoLink: {
    color: '#333',
    verticalAlign: 'middle',
    cursor: 'pointer',
    background: '#eee',
    display: 'inline-block',
    width: '250px',
    height: '250px',
    lineHeight: '250px',
    margin: '10px',
    border: '2px solid transparent',
    ':hover': {
      borderColor: 'blue'
    }
  },

  thumb: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
}
