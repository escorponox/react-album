import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getVisiblePhotos } from '../../redux/reducers'
import Spinner from '../spinner/Spinner'
import Photo from './Photo'
import './AlbumSlider.css'

const NotFound = () => <p>Photo not found on this album</p>

class AlbumSlider extends React.Component {
  state = {
    index: this.props.photos.indexOf(this.props.photo)
  }

  shouldComponentUpdate(nextProps) {
    return (
      !isNaN(nextProps.photoId) ||
      (!this.props.photo && nextProps.photo) ||
      (!this.props.album && nextProps.album)
    )
  }

  render() {
    let sliderSpace

    if (this.props.album && this.props.photo && this.props.photos) {
      const index = this.props.photos.indexOf(this.props.photo)

      if (index > -1) {
        const next = index === this.props.photos.length - 1 ? 0 : index + 1
        const prev = index === 0 ? this.props.photos.length - 1 : index - 1

        sliderSpace = (
          <div className="AlbumSlider">
            <div className="AlbumSlider__box">
              <h3 className="AlbumSlider__box-title">
                {this.props.album.title}
              </h3>
              <Link to={`/${this.props.albumId}`}>Back to Album</Link>
              <p>
                <Link
                  to={`/${this.props.albumId}/${this.props.photos[prev].id}`}
                >
                  Prev
                </Link>{' '}
                {index + 1} of{' '}
                {this.props.photos.length}{' '}
                <Link
                  to={`/${this.props.albumId}/${this.props.photos[next].id}`}
                >
                  Next
                </Link>
              </p>
              <Photo
                title={this.props.photo.title}
                url={this.props.photo.url}
              />
            </div>
          </div>
        )
      } else {
        sliderSpace = (
          <div className="AlbumSlider">
            <div className="AlbumSlider__box">
              <h3 className="AlbumSlider__box-title">
                {this.props.album.title}
              </h3>
              <Link to={`/${this.props.albumId}`}>Back to Album</Link>
              <NotFound />
            </div>
          </div>
        )
      }
    } else {
      sliderSpace = <Spinner />
    }

    return sliderSpace
  }
}

const mapStateToProps = (state, ownProps) => ({
  album: state.entities.albums.albumsById[ownProps.albumId],
  photo: state.entities.photos.photosById[ownProps.photoId],
  photos: getVisiblePhotos(state, ownProps.albumId)
})

export default connect(mapStateToProps)(AlbumSlider)
