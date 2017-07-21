// @flow

import React from 'react'
import { connect } from 'react-redux'
import { getVisiblePhotos } from '../../redux/reducers'
import Spinner from '../spinner/Spinner'
import PhotoCard from '../cards/PhotoCard'
import './Grid.css'

class PhotoGrid extends React.Component {
  state = {
    albumPage: 0
  }

  props: {
    albumId: number,
    photos: Array<Photo>,
    pageSize?: number,
    getAlbumList: Function
  }

  static defaultProps = {
    pageSize: 20
  }

  render() {
    return this.props.photos
      ? <div className="Grid">
          <div className="Grid__photo-container">
            {this.props.photos.map(photo =>
              <PhotoCard key={photo.id} photoId={photo.id} albumId={this.props.albumId} />
            )}
          </div>
        </div>
      : <Spinner />
  }
}

const mapStateToProps = (state, ownProps) => {
  return { photos: getVisiblePhotos(state, ownProps.albumId) }
}

export default connect(mapStateToProps)(PhotoGrid)
