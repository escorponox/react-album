// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ImagePlaceHolder from './ImagePlaceholder'
import './AlbumCard.css'

const AlbumCard = (props: {
  albumId: number,
  photoId: number,
  photo?: Photo
}) => {
  let albumThumbnailSpace,
    photoTitle
  if (props.photo) {
    albumThumbnailSpace = <img src={props.photo.thumbnailUrl} alt={props.photo.title} />
    photoTitle = props.photo.title
  } else {
    albumThumbnailSpace = <ImagePlaceHolder />
    photoTitle = 'Loading...'
  }

  return (
    <Link to={`/${props.albumId}/${props.photoId}`} className="AlbumCard">
      <div>
        <h3 className="AlbumCard__title" title={photoTitle}>
          {photoTitle}
        </h3>
        {albumThumbnailSpace}
      </div>
    </Link>
  )
}

const mapStateToProps = (state, ownProps) => ({
  photo: state.entities.photos.photosById[ownProps.photoId]
})

export default connect(mapStateToProps)(AlbumCard)
